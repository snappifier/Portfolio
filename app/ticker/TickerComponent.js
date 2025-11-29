'use client'

import {Ticker} from "motion-plus/react";
import Image from "next/image";
import figma from "../../public/figma_logo.svg"
import next from "../../public/nextjs_logo.svg"

export default function TickerComponent() {


    return (
        <div className="w-full max-h-10 bg-zinc-950">
            <Ticker
                items={[
                <Image src={next} alt="figma logo" width={100} height={100} className="duration-300"/>,
                    ]} hoverFactor={0.3}></Ticker>
        </div>
    )
}