import React, { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

/**
 * CareersPage.jsx
 * Enhanced single-file React component (JSX) that reads job listings from a CSV file
 * and displays them with search, filters and pagination. Includes an internal
 * job application flow (modal) allowing users to apply directly from the page.
 * Tailwind classes are used for styling so ensure Tailwind is configured.
 *
 * Usage:
 *  - Place a CSV at public/careers.csv (or host somewhere) and pass its URL as csvUrl prop.
 *  - Or let users upload a CSV with the "Upload CSV" control.
 *  - To receive applications, implement a server endpoint (default: /api/apply)
 *    that accepts multipart/form-data. If you don't have a backend, the form
 *    will fallback to generate a mailto link (subject to file attachments not working in mailto).
 *
 * Expected CSV headers (case-insensitive):
 * id,title,department,location,type,salary,posted,description,apply_link
 *
 * New features added:
 *  - Internal Apply modal with fields: name, email, phone, cover letter, resume upload
 *  - Client-side validation and resume file size/type checks
 *  - Progress / success / error states when submitting
 *  - Saves draft application to localStorage so progress isn't lost
 *  - Option to configure submitUrl prop for ATS/endpoint integration
 */

export default function CareersPage({ csvUrl = "/careers.csv", pageSize = 6, submitUrl = "/api/apply" }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // UI state
  const [query, setQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [page, setPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);

  // Apply modal state
  const [isApplying, setIsApplying] = useState(false);
  const [appState, setAppState] = useState({
    jobId: null,
    name: "",
    email: "",
    phone: "",
    cover: "",
    resume: null,
    consent: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  useEffect(() => {
    loadCsv(csvUrl);
  }, [csvUrl]);

  useEffect(() => {
    // load draft from localStorage if present
    try {
      const raw = localStorage.getItem("careers_apply_draft");
      if (raw) {
        const d = JSON.parse(raw);
        setAppState((s) => ({ ...s, ...d }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    // persist draft (avoid storing files)
    const { resume, ...rest } = appState;
    try {
      localStorage.setItem("careers_apply_draft", JSON.stringify(rest));
    } catch (e) {
      // ignore
    }
  }, [appState]);

  function csvRowToJob(row) {
    return {
      id: row.id || row.ID || row.Id || Math.random().toString(36).slice(2, 9),
      title: row.title || row.Title || "Untitled",
      department: row.department || row.Department || "General",
      location: row.location || row.Location || "Remote",
      type: row.type || row.Type || "Full-time",
      salary: row.salary || row.Salary || "",
      posted: row.posted || row.Posted || "",
      description: row.description || row.Description || "",
      apply_link: row.apply_link || row.applyLink || row.Apply_Link || "",
    };
  }

  function loadCsv(url) {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
        return res.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const rows = results.data.map(csvRowToJob);
            setJobs(rows);
            setLoading(false);
          },
          error: (err) => {
            setError(err.message || "Failed to parse CSV");
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err.message || "Failed to load CSV");
        setLoading(false);
      });
  }

  function handleFileUpload(file) {
    setLoading(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data.map(csvRowToJob);
        setJobs(rows);
        setLoading(false);
      },
      error: (err) => {
        setError(err.message || "Failed to parse uploaded CSV");
        setLoading(false);
      },
    });
  }

  // Derived lists for filters
  const departments = useMemo(() => {
    const s = new Set(jobs.map((j) => j.department || "General"));
    return ["", ...Array.from(s).sort()];
  }, [jobs]);
  const locations = useMemo(() => {
    const s = new Set(jobs.map((j) => j.location || "Remote"));
    return ["", ...Array.from(s).sort()];
  }, [jobs]);
  const types = useMemo(() => {
    const s = new Set(jobs.map((j) => j.type || "Full-time"));
    return ["", ...Array.from(s).sort()];
  }, [jobs]);

  // Filtering and searching
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (departmentFilter && job.department !== departmentFilter) return false;
      if (locationFilter && job.location !== locationFilter) return false;
      if (typeFilter && job.type !== typeFilter) return false;
      if (!q) return true;
      const hay = `${job.title} ${job.department} ${job.location} ${job.type} ${job.description}`.toLowerCase();
      return hay.includes(q);
    });
  }, [jobs, query, departmentFilter, locationFilter, typeFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // Apply flow helpers
  function openApply(job) {
    setSelectedJob(job);
    setAppState((s) => ({ ...s, jobId: job.id }));
    setIsApplying(true);
    setSubmitResult(null);
  }

  function handleAppChange(field, value) {
    setAppState((s) => ({ ...s, [field]: value }));
  }

  function validateApplication() {
    const { name, email, consent } = appState;
    if (!name || name.trim().length < 2) return "Please enter your full name.";
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email address.";
    if (!consent) return "Please confirm consent to process your data.";
    // resume optional — but if present, check type/size
    if (appState.resume) {
      const file = appState.resume;
      const maxMB = 5;
      if (file.size > maxMB * 1024 * 1024) return `Resume file must be <= ${maxMB} MB.`;
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowed.includes(file.type)) return "Allowed resume formats: PDF or DOC/DOCX.";
    }
    return null;
  }

  async function submitApplication() {
    const err = validateApplication();
    if (err) {
      setSubmitResult({ ok: false, message: err });
      return;
    }

    setSubmitting(true);
    setSubmitResult(null);

    // If submitUrl is provided, try to POST multipart/form-data
    if (submitUrl) {
      try {
        const fd = new FormData();
        fd.append("jobId", appState.jobId || "");
        fd.append("name", appState.name || "");
        fd.append("email", appState.email || "");
        fd.append("phone", appState.phone || "");
        fd.append("cover", appState.cover || "");
        if (appState.resume) fd.append("resume", appState.resume);

        const res = await fetch(submitUrl, {
          method: "POST",
          body: fd,
        });

        if (!res.ok) {
          const t = await res.text();
          throw new Error(t || `Server returned ${res.status}`);
        }

        setSubmitResult({ ok: true, message: "Application submitted — danke! We received your application." });
        // clear draft and form (but keep last used email/name?)
        setAppState((s) => ({ jobId: s.jobId, name: s.name, email: s.email, phone: "", cover: "", resume: null, consent: true }));
        localStorage.removeItem("careers_apply_draft");
      } catch (e) {
        console.error(e);
        setSubmitResult({ ok: false, message: `Submission failed: ${e.message}` });
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Fallback — create mailto (note: attachments won't work)
    try {
      const subject = encodeURIComponent(`Application for ${selectedJob?.title || "role"}`);
      const body = encodeURIComponent(`Name: ${appState.name}\nEmail: ${appState.email}\nPhone: ${appState.phone}\n\nCover letter:\n${appState.cover}`);
      const mailto = `mailto:hr@example.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
      setSubmitResult({ ok: true, message: "Opened your mail client. Please attach your resume and send the email." });
    } catch (e) {
      setSubmitResult({ ok: false, message: `Could not open mail client: ${e.message}` });
    } finally {
      setSubmitting(false);
    }
  }

  function clearDraft() {
    localStorage.removeItem("careers_apply_draft");
    setAppState({ jobId: null, name: "", email: "", phone: "", cover: "", resume: null, consent: true });
    setSubmitResult(null);
  }

  return (
    <div>
      <Header/>
      <div className="min-h-screen max-w-6xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Careers</h1>
            <p className="text-sm text-gray-600">Open roles — updated from a CSV source</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2">
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFileUpload(f);
                }}
                className="hidden"
                id="csv-upload"
              />
              <button
                onClick={() => document.getElementById("csv-upload").click()}
                className="px-3 py-2 bg-slate-800 text-white rounded-md shadow-sm hidden"
              >
                Upload CSV
              </button>
            </label>
            <button onClick={() => loadCsv(csvUrl)} className="px-3 py-2 border rounded-md hidden">Reload</button>
          </div>
        </header>

        <section className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="search"
            aria-label="Search jobs"
            placeholder="Search by title, description, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:col-span-2 p-3 border rounded-md"
          />

          <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="p-3 border rounded-md">
            {departments.map((d) => (
              <option key={d || "all-depts"} value={d}>{d || "All departments"}</option>
            ))}
          </select>

          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="p-3 border rounded-md">
            {locations.map((l) => (
              <option key={l || "all-loc"} value={l}>{l || "All locations"}</option>
            ))}
          </select>

          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="p-3 border rounded-md">
            {types.map((t) => (
              <option key={t || "all-type"} value={t}>{t || "All types"}</option>
            ))}
          </select>
        </section>

        <main>
          {loading ? (
            <div className="py-12 text-center">Loading…</div>
          ) : error ? (
            <div className="py-6 text-center text-red-600">Error: {error}</div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-600">No roles match your filters.</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {pageItems.map((job) => (
                <article key={job.id} className="p-4 border rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="text-sm text-gray-500">{job.department} • {job.location} • {job.type}</div>
                    <p className="mt-3 text-sm text-gray-700 line-clamp-3">{job.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-600">Posted: {job.posted || "—"}</div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedJob(job)} className="px-3 py-1 border rounded-md">Details</button>
                      <button onClick={() => openApply(job)} className="px-3 py-1 bg-green-600 text-white rounded-md">Apply</button>
                      {job.apply_link && (
                        <a href={job.apply_link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white rounded-md">External Apply</a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Pagination */}
        <footer className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing {Math.min(filtered.length, (page - 1) * pageSize + 1)} - {Math.min(filtered.length, page * pageSize)} of {filtered.length}</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 border rounded-md" disabled={page === 1}>Prev</button>
            <div className="px-3 py-1 border rounded-md">{page} / {totalPages}</div>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded-md" disabled={page === totalPages}>Next</button>
          </div>
        </footer>

        {/* Floating footer apply bar — visible when a job is selected */}
        {selectedJob && (
          <div className="fixed left-4 right-4 bottom-4 md:left-auto md:right-8 md:bottom-8 z-50">
            <div className="bg-white border rounded-2xl shadow-lg p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{selectedJob.title}</div>
                <div className="text-sm text-gray-500">{selectedJob.department} • {selectedJob.location}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-full" onClick={() => openApply(selectedJob)}>Apply Now</button>
                <button className="px-3 py-2 border rounded-md" onClick={() => setSelectedJob(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Apply Modal */}
        {isApplying && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black opacity-40" onClick={() => setIsApplying(false)} />
            <div className="relative z-70 w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-auto max-h-[90vh]">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Apply for {selectedJob?.title}</h2>
                    <div className="text-sm text-gray-500">{selectedJob?.department} • {selectedJob?.location}</div>
                  </div>
                  <button className="text-gray-600" onClick={() => setIsApplying(false)}>✕</button>
                </div>

                <div className="mt-4">
                  <label className="block text-sm">Full name</label>
                  <input value={appState.name} onChange={(e) => handleAppChange("name", e.target.value)} className="w-full p-2 border rounded-md" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm">Email</label>
                    <input value={appState.email} onChange={(e) => handleAppChange("email", e.target.value)} className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm">Phone (optional)</label>
                    <input value={appState.phone} onChange={(e) => handleAppChange("phone", e.target.value)} className="w-full p-2 border rounded-md" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm">Cover letter (optional)</label>
                  <textarea value={appState.cover} onChange={(e) => handleAppChange("cover", e.target.value)} rows={6} className="w-full p-2 border rounded-md" />
                </div>

                <div className="mt-4">
                  <label className="block text-sm">Resume (PDF / DOC / DOCX, max 5MB)</label>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleAppChange("resume", e.target.files?.[0] || null)} className="mt-2" />
                  {appState.resume && <div className="mt-2 text-sm text-gray-600">Selected: {appState.resume.name}</div>}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <input type="checkbox" id="consent" checked={appState.consent} onChange={(e) => handleAppChange("consent", e.target.checked)} />
                  <label htmlFor="consent" className="text-sm">I consent to the processing of my application data.</label>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={submitApplication} disabled={submitting} className="px-4 py-2 bg-blue-600 text-white rounded-md">{submitting ? "Submitting…" : "Submit Application"}</button>
                  <button onClick={() => { setIsApplying(false); }} className="px-4 py-2 border rounded-md">Close</button>
                  <button onClick={clearDraft} className="px-4 py-2 text-sm text-gray-600">Clear draft</button>
                </div>

                {submitResult && (
                  <div className={`mt-4 p-3 rounded-md ${submitResult.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>{submitResult.message}</div>
                )}

                <div className="mt-6 text-xs text-gray-500">
                  <strong>Hinweis auf Deutsch:</strong> Ihre Bewerbung wird temporär lokal gespeichert (nur Formfelder, keine Datei). Für Produktion: richten Sie bitte ein sicheres Backend / ATS ein.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
