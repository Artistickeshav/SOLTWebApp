"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type MomentCategory = "Blood donation & healthcare" | "Community gatherings & meetings";

type Moment = {
  src: string;
  width: number;
  height: number;
  category: MomentCategory;
  alt: string;
  caption?: string;
};

const moments: Moment[] = [
  {
    src: "/images/historical/service-01.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "A group touring a room with refrigerated units labeled tested red cell.",
  },
  {
    src: "/images/historical/service-02.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "People pose together near a sign reading Share Joy of Life, Share Blood.",
  },
  {
    src: "/images/historical/service-03.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "Visitors stand around blood processing equipment in a laboratory.",
  },
  {
    src: "/images/historical/service-04.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "A group poses beside a red bus marked Blood Save Lives.",
  },
  {
    src: "/images/historical/service-05.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "A group of guests stands together inside a healthcare facility.",
  },
  {
    src: "/images/historical/service-06.webp",
    width: 1600,
    height: 1066,
    category: "Community gatherings & meetings",
    alt: "People sit around a conference table during a meeting.",
  },
  {
    src: "/images/historical/service-07.webp",
    width: 1600,
    height: 1066,
    category: "Blood donation & healthcare",
    alt: "Two women and a man stand beside a seated blood donor near a Donate Blood sign.",
    caption: "First platelet donor for COVID-19 patients.",
  },
  {
    src: "/images/historical/service-08.webp",
    width: 1599,
    height: 899,
    category: "Community gatherings & meetings",
    alt: "A row of guests seated on a stage at an outdoor gathering.",
    caption: "Blood donation camp presided over by Shri Raj Nath Singh, Minister of Defence.",
  },
  {
    src: "/images/historical/service-09.webp",
    width: 1599,
    height: 899,
    category: "Community gatherings & meetings",
    alt: "People stand and sit among rows of chairs on a lawn at an outdoor event.",
  },
  {
    src: "/images/historical/service-10.webp",
    width: 1280,
    height: 720,
    category: "Community gatherings & meetings",
    alt: "A tented event area with people, seating and service banners.",
  },
  {
    src: "/images/historical/service-11.webp",
    width: 1599,
    height: 899,
    category: "Blood donation & healthcare",
    alt: "Four people pose in front of a framed illustration labeled Rotary Blood Bank.",
  },
  {
    src: "/images/historical/service-12.webp",
    width: 1600,
    height: 900,
    category: "Blood donation & healthcare",
    alt: "Two attendees pose beside a display board with Rotary Blood Bank Delhi signage.",
  },
  {
    src: "/images/historical/service-13.webp",
    width: 1600,
    height: 1200,
    category: "Blood donation & healthcare",
    alt: "Two men pose in front of a framed illustration of a blood bank building.",
  },
  {
    src: "/images/historical/service-14.webp",
    width: 1599,
    height: 899,
    category: "Blood donation & healthcare",
    alt: "A seated guest signs a book while others watch beneath blood donation signs.",
  },
];

const categories: MomentCategory[] = [
  "Blood donation & healthcare",
  "Community gatherings & meetings",
];

export function MomentsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeMoment = activeIndex === null ? null : moments[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeMoment && !dialog.open) dialog.showModal();
    if (!activeMoment && dialog.open) dialog.close();
  }, [activeMoment]);

  useEffect(() => {
    const handleNavigation = (event: KeyboardEvent) => {
      if (!dialogRef.current?.open || activeIndex === null) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((activeIndex + 1) % moments.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((activeIndex - 1 + moments.length) % moments.length);
      }
    };

    window.addEventListener("keydown", handleNavigation);
    return () => window.removeEventListener("keydown", handleNavigation);
  }, [activeIndex]);

  const closeDialog = () => setActiveIndex(null);

  return (
    <section className="moments-section" aria-labelledby="moments-title">
      <div className="container">
        <div className="moments-heading">
          <p className="eyebrow">From the archive</p>
          <h2 id="moments-title">Moments of Service</h2>
        </div>

        {categories.map((category) => {
          const categoryMoments = moments
            .map((moment, index) => ({ moment, index }))
            .filter(({ moment }) => moment.category === category);

          return (
            <section className="moments-category" key={category} aria-label={category}>
              <h3>{category}</h3>
              <div className="moments-masonry">
                {categoryMoments.map(({ moment, index }) => (
                  <figure className="moment-card" key={moment.src}>
                    <button
                      className="moment-open"
                      type="button"
                      aria-label={`View photograph ${index + 1} of ${moments.length}`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <Image
                        src={moment.src}
                        alt={moment.alt}
                        width={moment.width}
                        height={moment.height}
                        sizes="(max-width: 620px) 94vw, (max-width: 900px) 46vw, 31vw"
                      />
                      <span className="moment-expand" aria-hidden="true">View</span>
                    </button>
                    {moment.caption && <figcaption className="moment-caption">{moment.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <dialog
        className="moment-lightbox"
        ref={dialogRef}
        aria-label="Photograph viewer"
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        {activeMoment && activeIndex !== null && (
          <>
            <div className="lightbox-toolbar">
              <p>{activeMoment.category}</p>
              <button className="lightbox-close" type="button" onClick={closeDialog} aria-label="Close photograph viewer" autoFocus>
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image-wrap">
              <button
                className="lightbox-nav lightbox-prev"
                type="button"
                aria-label="Previous photograph"
                onClick={() => setActiveIndex((activeIndex - 1 + moments.length) % moments.length)}
              >
                <ChevronLeft size={25} aria-hidden="true" />
              </button>
              <Image
                className="lightbox-image"
                src={activeMoment.src}
                alt={activeMoment.alt}
                width={activeMoment.width}
                height={activeMoment.height}
                sizes="94vw"
                quality={90}
              />
              <button
                className="lightbox-nav lightbox-next"
                type="button"
                aria-label="Next photograph"
                onClick={() => setActiveIndex((activeIndex + 1) % moments.length)}
              >
                <ChevronRight size={25} aria-hidden="true" />
              </button>
            </div>
            {activeMoment.caption && <p className="lightbox-caption">{activeMoment.caption}</p>}
            <p className="lightbox-count">{activeIndex + 1} / {moments.length}</p>
          </>
        )}
      </dialog>
    </section>
  );
}
