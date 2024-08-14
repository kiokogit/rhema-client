import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import EventsDetail from "../components/EventsDetail";

const EventsDetailPage = () => {
    return (
        <Layout pageTitle="Events Detail">
            <EventsDetail />
        </Layout>
    );
};

export default EventsDetailPage;
