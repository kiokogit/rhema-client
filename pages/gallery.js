import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Gallery">
            <Gallery />
        </Layout>
    );
};

export default GalleryPage;
