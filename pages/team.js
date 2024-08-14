import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Team from "../components/Team";

const TeamPage = () => {
    return (
        <Layout pageTitle="Team">
            <Team />
        </Layout>
    );
};

export default TeamPage;
