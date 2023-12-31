"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/libs/cn";

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-7">
        <Image
          src={"https://bit.ly/placeholder-img"}
          alt="image"
          layout="fill"
          objectFit="cover"
          className={
            (cn("group-hover:opacity-75 duration-700 ease-in-out"),
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100")
          }
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </Link>
  );
};

export default ImageGallery;
