'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, ArrowRight, MapPin, Pause, Play, Sparkles} from 'lucide-react';
import type {CityGuide} from '@/data/cities';
import type {Locale} from '@/i18n/routing';

type CarouselCopy = {
  title: string;
  intro: string;
  eyebrow: string;
  open: string;
  available: string;
};

type CityFullscreenCarouselProps = {
  locale: Locale;
  cities: CityGuide[];
  copy: CarouselCopy;
};

const AUTOPLAY_MS = 5200;

export function CityFullscreenCarousel({locale, cities, copy}: CityFullscreenCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || cities.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cities.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [cities.length, isPlaying]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + cities.length) % cities.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % cities.length);
  };

  return (
    <section className="relative -mt-[4.75rem] min-h-[100svh] overflow-hidden bg-ink text-white">
      {cities.map((city, index) => (
        <div
          key={city.slug}
          className={`absolute inset-0 transition duration-1000 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={city.heroImage}
            alt={city.heroAlt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition duration-[5200ms] ease-out ${index === activeIndex ? 'scale-105' : 'scale-100'}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,18,18,0.86),rgba(9,18,18,0.54)_45%,rgba(9,18,18,0.16))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,18,18,0.72),rgba(9,18,18,0.08)_45%,rgba(9,18,18,0.2))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-7 pt-28 md:px-6 md:pb-10 md:pt-32">
        <div className="max-w-3xl pb-20 md:pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/32 bg-white/16 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
            <Sparkles size={15} aria-hidden="true" />
            {copy.eyebrow}
          </div>

          <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-gold">{copy.available}</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.88] md:text-8xl">{cities[activeIndex].name}</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/90 md:text-2xl md:leading-9">{cities[activeIndex].tagline}</p>
          <p className="mt-4 line-clamp-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base md:leading-8">{cities[activeIndex].summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/82">
            <MapPin size={15} aria-hidden="true" />
            {cities[activeIndex].badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/20 bg-white/14 px-3 py-1.5 backdrop-blur">{badge}</span>
            ))}
          </div>

          <Link href={`/${locale}/cities/${cities[activeIndex].slug}`} className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-gold px-6 py-3 font-black text-ink shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#f0c94f]">
            {copy.open}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="absolute bottom-7 left-4 right-4 md:bottom-10 md:left-6 md:right-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 snap-row">
              {cities.map((city, index) => (
                <button
                  key={city.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`min-h-12 shrink-0 rounded-full border px-4 py-2 text-sm font-black transition ${
                    index === activeIndex
                      ? 'border-gold bg-gold text-ink'
                      : 'border-white/28 bg-white/12 text-white backdrop-blur hover:bg-white/20'
                  }`}
                  aria-label={`${copy.open}: ${city.name}`}
                  aria-current={index === activeIndex}
                >
                  {city.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/14 text-white backdrop-blur transition hover:bg-white/22"
                aria-label="Previous city"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((current) => !current)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/14 text-white backdrop-blur transition hover:bg-white/22"
                aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
              >
                {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/14 text-white backdrop-blur transition hover:bg-white/22"
                aria-label="Next city"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mx-auto mt-4 grid max-w-6xl grid-cols-4 gap-2" aria-hidden="true">
            {cities.map((city, index) => (
              <span key={city.slug} className={`h-1 rounded-full transition ${index === activeIndex ? 'bg-gold' : 'bg-white/25'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
