import React from "react";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout>
      <section className="text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">About Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          The Buganda Convention unites the Baganda community across the world
          to celebrate culture, unity, and progress.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          In 2025, Berlin will host an exciting cultural event featuring
          workshops, performances, and discussions that highlight Buganda’s
          heritage and vision for the future.
        </p>
      </section>
    </Layout>
  );
}
