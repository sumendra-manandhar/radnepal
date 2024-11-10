"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css"; // Import your CSS here
import Image from "next/image";

import Bg1 from "../app/image/img1.jpg";
import Bg2 from "../app/image/img2.jpg";
import Bg3 from "../app/image/img3.jpg";
import Bg4 from "../app/image/img4.jpg";

const HeroSlider: React.FC = () => {
  const timeRunning = 4000; // Animation duration
  const timeAutoNext = 11000; // Auto-slide duration

  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const [autoSlideTimeout, setAutoSlideTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [animationTimeout, setAnimationTimeout] =
    useState<NodeJS.Timeout | null>(null);

  // Handler for showing next or previous slide
  const showSlider = (type: "next" | "prev") => {
    if (!sliderRef.current || !thumbnailRef.current) return;

    const sliderItems = Array.from(sliderRef.current.children) as HTMLElement[];
    const thumbnailItems = Array.from(
      thumbnailRef.current.children
    ) as HTMLElement[];

    if (type === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current?.classList.add("next");
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current?.classList.add("prev");
    }

    if (animationTimeout) clearTimeout(animationTimeout);
    setAnimationTimeout(
      setTimeout(() => {
        carouselRef.current?.classList.remove("next", "prev");
      }, timeRunning)
    );

    resetAutoSlide();
  };

  // Function to reset auto-slide timer
  const resetAutoSlide = () => {
    if (autoSlideTimeout) clearTimeout(autoSlideTimeout);
    setAutoSlideTimeout(
      setTimeout(() => {
        showSlider("next");
      }, timeAutoNext)
    );
  };

  // Initialize auto-slide on component mount
  useEffect(() => {
    resetAutoSlide();

    return () => {
      // Clean up timeouts on unmount
      if (autoSlideTimeout) clearTimeout(autoSlideTimeout);
      if (animationTimeout) clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {/* Slider items */}
      <div className="list" ref={sliderRef}>
        <div className="item">
          <Image
            src="https://images.unsplash.com/photo-1531746791284-7e69f6b87f2b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpa2UlMjBvbiUyMHdvc2l0ZXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Bike on road"
            width={500}
            height={300}
          />
          <div className="content">
            <div className="author">RAD</div>
            <div className="title">Slide 1</div>
            <div className="topic">BIKE</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <Image src={Bg1} alt="Design concept" width={500} height={300} />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src={Bg2} alt="Design concept" width={500} height={300} />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src={Bg3} alt="Design concept" width={500} height={300} />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src={Bg4} alt="Design concept" width={500} height={300} />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde.
            </div>
            <div className="buttons">
              {/* <button>SEE MORE</button>
              <button>SUBSCRIBE</button> */}
            </div>
          </div>
          x
        </div>

        {/* Add more slides similarly */}
      </div>

      {/* Thumbnail section */}
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <div className="content">
            <Image src={Bg1} alt="Design concept" />
            <div className="title">Slider 1</div>
            <div className="description">BIKE</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <Image src={Bg2} alt="Design concept" />
            <div className="title">Slider 2</div>
            <div className="description">BIKE</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <Image src={Bg3} alt="Design concept" />
            <div className="title">Slider 3</div>
            <div className="description">BIKE</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <Image src={Bg4} alt="Design concept" />
            <div className="title">Slider 4</div>
            <div className="description">BIKE</div>
          </div>
        </div>
        {/* Add more thumbnail items */}
      </div>

      {/* Next/Prev buttons */}
      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          Prev
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          Next
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default HeroSlider;
