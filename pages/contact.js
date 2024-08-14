import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Map from "../components/Map";


const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <Contact />
            <Map />
        </Layout>
    );
};

export default ContactPage;
