import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>GPMG</title>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="whoamandang"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting.You can also buy me a coffee directly using UPI (for Indian users) : thisisamandang@okhdfcbank"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        />
        <meta
          name="description"
          content="Make Awesome Github Profile Readme in seconds"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar></NavBar>
        <Homepage></Homepage>
        <Footer></Footer>
      </main>
    </>
  );
}
