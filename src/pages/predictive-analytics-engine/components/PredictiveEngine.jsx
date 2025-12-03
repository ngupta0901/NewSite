import React, { useState, useEffect } from 'react';


// --- Helper Functions for the Simulated Demo Logic (Same as before) ---

const runSimulation = (daysAhead) => {
    // 1. Simulate Historical Data
    const numDays = 100;
    const today = new Date('2024-04-10'); 
    
    // 2. Simplified Model (Linear Regression proxy: Sales = m*DayIndex + c)
    const futureIndex = numDays + daysAhead - 1;

    // 3. Prediction Calculation
    const predictedTrend = futureIndex * 0.5;
    const predictedSeasonality = Math.sin(futureIndex * 2 * Math.PI / 30) * 20;
    const baseDemand = 100;
    
    const finalPrediction = Math.round(baseDemand + predictedTrend + predictedSeasonality);
    
    // Calculate the future date
    const futureDate = new Date(today.getTime());
    futureDate.setDate(today.getDate() + daysAhead);

    // Simulate Historical Data for display
    let sales = [];
    for (let i = 90; i < 100; i++) { // Get last 10 days
        const trend = i * 0.5;
        const seasonality = Math.sin(i * 2 * Math.PI / 30) * 20;
        const noise = Math.random() * 10 - 5;
        const totalSales = 100 + trend + seasonality + noise;
        sales.push(Math.round(totalSales));
    }

    return {
        date: futureDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        prediction: finalPrediction,
        historicalData: sales, 
    };
};

// --- React Component ---
export default function PredictiveEngine() {
    const [daysAhead, setDaysAhead] = useState(5);
    const [predictionResult, setPredictionResult] = useState(null);
    const accuracy = 0.95; 

    useEffect(() => {
        setPredictionResult(runSimulation(daysAhead));
    }, [daysAhead]);

    const handleDaysChange = (event) => {
        const newDays = parseInt(event.target.value, 10);
        if (!isNaN(newDays) && newDays >= 1 && newDays <= 365) {
            setDaysAhead(newDays);
        }
    };
    
    const tableData = [
        { feature: 'Real-time Predictions', description: 'Low-latency APIs deliver instantaneous forecasts and insights.', value: 'Instantaneous Action' },
        { feature: 'Custom Model Training', description: 'Models are trained specifically on your proprietary data sets.', value: 'High Accuracy & Relevance' },
        { feature: 'Seamless API Integration', description: 'Easily connect the engine to your existing CRM, ERP, and BI tools.', value: 'Rapid Deployment' },
        { feature: 'Automated Retraining', description: 'Models continuously learn and automatically recalibrate based on new incoming data.', value: 'Sustained Performance' },
    ];


    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            
            {/* Hero Section */}
            <header className="bg-indigo-700 text-white py-20 shadow-xl">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 flex items-center justify-center">
                        <span className="text-yellow-300 mr-3">💡</span> Predictive Analytics Engine
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-6">
                        Anticipate the Future with **{Math.round(accuracy * 100)}% Accuracy**
                    </h2>
                    <p className="text-indigo-200 max-w-2xl mx-auto">
                        Stop reacting to data—start **predicting** it. Leverage cutting-edge machine learning to forecast trends and empower truly data-driven decision-making.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                
                {/* Key Capabilities */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-indigo-400 pb-2">🚀 Key Capabilities</h3>
                    
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-indigo-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value to You</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tableData.map((item) => (
                                    <tr key={item.feature} className="hover:bg-gray-50 transition duration-150">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">{item.feature}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <hr className="my-12 border-indigo-200" />
                
                {/* Demo Program */}
                <section className="bg-white p-8 rounded-xl shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-400 pb-2">💻 Live Demo: Retail Demand Forecasting</h3>
                    <p className="text-lg text-gray-600 mb-6">Simulate a **real-time prediction** API call using custom-trained models.</p>

                    <div className="flex items-center space-x-4 mb-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <label htmlFor="days-ahead" className="text-gray-700 font-medium">Predict Sales For:</label>
                        <input
                            id="days-ahead"
                            type="number"
                            min="1"
                            max="365"
                            value={daysAhead}
                            onChange={handleDaysChange}
                            className="w-20 p-2 border border-purple-300 rounded-md text-center focus:ring-purple-500 focus:border-purple-500"
                        />
                        <span className="text-gray-700"> days ahead</span>
                    </div>
                    
                    {predictionResult && (
                        <div className="prediction-output bg-green-50 p-6 rounded-lg border-l-4 border-green-500 shadow-md">
                            <h4 className="text-xl font-bold text-green-700 mb-3">API Response: **Real-time Prediction**</h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Predicted Date:</p>
                                    <p className="text-2xl font-semibold text-gray-800">{predictionResult.date}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Predicted Sales Value:</p>
                                    <p className="text-4xl font-extrabold text-green-600">
                                        {predictionResult.prediction} units
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-green-200">
                                *This prediction is based on the simulated custom model training, using historical data.
                            </p>
                            
                            <div className="mt-6">
                                <h5 className="text-md font-semibold text-gray-700 mb-2">Sample Historical Data Input (Last 10 days):</h5>
                                <div className="p-3 bg-gray-100 rounded-md text-sm font-mono overflow-x-auto">
                                    {predictionResult.historicalData.join(', ')} ...
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg">Ready to integrate predictive power?</p>
                    <a 
                        href="#contact" 
                        className="mt-3 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
                    >
                        Contact Us Today
                    </a>
                </div>
            </footer>

        </div>
    );
}
