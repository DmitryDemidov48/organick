import React from 'react';
import Image from "next/image";
import About from "@/components/about/About";
import Choose from "@/components/about/Choose";
import Team from "@/components/about/Team";

const Page = () => {
    return (
        <main>
            <div>
                <Image src='/about.png' alt='about' width={1440} height={450}/>
            </div>
            <About/>
            <Choose/>
            <Team/>
        </main>
    );
};

export default Page;