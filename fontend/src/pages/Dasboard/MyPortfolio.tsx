import React, { useEffect, useState } from "react";
import { getMyPortfolio } from "../../services/portfolio.service";

const MyPortfolio = () => {
    const [portfolio, setPortfolio] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMyPortfolio();
            setPortfolio(data);
        };
        fetchData();
    }, []);

    if (!portfolio) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{portfolio.fullName}</h1>
            <p className="text-gray-600">{portfolio.title}</p>

            <div className="mt-4">
                <h3 className="font-semibold">About</h3>
                <p>{portfolio.about}</p>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold">Skills</h3>
                <ul className="list-disc ml-6">
                    {portfolio.skills.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold">Projects</h3>
                <ul className="list-disc ml-6">
                    {portfolio.projects.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;
