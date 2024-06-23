import React, { useEffect } from 'react';

const StatsSection = () => {
    useEffect(() => {
        const animateValue = (id, start, end, duration) => {
            const obj = document.getElementById(id);
            const range = end - start;
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.textContent = Math.floor(progress * range + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        animateValue('stat1', 0, 10000, 2000);
        animateValue('stat2', 0, 8500, 2000);
        animateValue('stat3', 0, 85, 2000);
        animateValue('stat4', 0, 200, 2000);
    }, []);

    return (
        <section className="text-center py-16 bg-black text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="stat-item">
                        <div className="text-5xl font-bold" id="stat1">0</div>
                        <p className="text-gray-600 mt-2">Total Students</p>
                    </div>
                    <div className="stat-item">
                        <div className="text-5xl font-bold" id="stat2">0</div>
                        <p className="text-gray-600 mt-2">Successful Graduate</p>
                    </div>
                    <div className="stat-item">
                        <div className="text-5xl font-bold" id="stat3">0 %</div>
                        <p className="text-gray-600 mt-2">Graduation Rate</p>
                    </div>
                    <div className="stat-item">
                        <div className="text-5xl font-bold" id="stat4">0</div>
                        <p className="text-gray-600 mt-2">Workshops Held</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
