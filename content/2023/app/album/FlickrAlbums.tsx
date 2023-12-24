'use client';

import { useEffect, useState } from 'react';

const getDevice = () => {
  const width = document.body.clientWidth;
  if (width >= 1024) {
    return 'desktop';
  } else if (width >= 640) {
    return 'tablet';
  } else {
    return 'mobile';
  }
};

const getWidthOfEmbed = (device: string) => {
  switch (device) {
    case 'desktop':
      return 1024;
    case 'tablet':
      return 600;
    default:
      return 320;
  }
};

const getHeightOfEmbed = (device: string) => {
  switch (device) {
    case 'desktop':
      return 768;
    case 'tablet':
      return 400;
    default:
      return 240;
  }
};

const injectAlbums = (width: number, height: number) => {
  const flickrContainer = document.getElementById('flickr-container');
  // remove any data-flickr-embed elements
  // sometimes flickr embed script does not replace them with iframe elements
  const flickrEmbeds =
    flickrContainer?.querySelectorAll('[data-flickr-embed]') ?? [];
  Array.from(flickrEmbeds).forEach((embed) => {
    embed.remove();
  });
  // remove albums if exists
  const albums =
    flickrContainer?.getElementsByClassName('flickr-embed-frame') ?? [];
  Array.from(albums).forEach((album) => {
    album.remove();
  });
  // remove flickr embed script if exists
  const flickrJs = document.getElementById('flickr-js');
  flickrJs?.remove();
  // inject albums
  const album1 = document.createElement('a');
  album1.setAttribute('data-flickr-embed', 'true');
  album1.setAttribute(
    'href',
    'https://www.flickr.com/photos/sciwork/albums/72177720313419664',
  );
  album1.setAttribute('title', 'sciwork conference 2023 Day 1');
  const album1Img = document.createElement('img');
  album1Img.setAttribute(
    'src',
    'https://live.staticflickr.com/65535/53399466379_cf8e00c650_b.jpg',
  );
  album1Img.setAttribute('width', width.toString());
  album1Img.setAttribute('height', height.toString());
  album1Img.setAttribute('alt', 'sciwork conference 2023 Day 1');
  album1.appendChild(album1Img);
  flickrContainer?.appendChild(album1);
  const album2 = document.createElement('a');
  album2.setAttribute('data-flickr-embed', 'true');
  album2.setAttribute(
    'href',
    'https://www.flickr.com/photos/sciwork/albums/72177720313393655',
  );
  album2.setAttribute('title', 'sciwork conference 2023 Day 2');
  const album2Img = document.createElement('img');
  album2Img.setAttribute(
    'src',
    'https://live.staticflickr.com/65535/53398240762_d7f14bc089_b.jpg',
  );
  album2Img.setAttribute('width', width.toString());
  album2Img.setAttribute('height', height.toString());
  album2Img.setAttribute('alt', 'sciwork conference 2023 Day 2');
  album2.appendChild(album2Img);
  flickrContainer?.appendChild(album2);
  // inject flickr embed script
  const newFlickrJs = document.createElement('script');
  newFlickrJs.async = true;
  newFlickrJs.id = 'flickr-js';
  newFlickrJs.src = '//embedr.flickr.com/assets/client-code.js';
  document.body.appendChild(newFlickrJs);
};

const FlickrAlbums = () => {
  const [device, setDevice] = useState('mobile');
  const [width, setWidth] = useState(getWidthOfEmbed(device));
  const [height, setHeight] = useState(getHeightOfEmbed(device));

  useEffect(() => {
    setDevice(getDevice());
    setWidth(getWidthOfEmbed(device));
    setHeight(getHeightOfEmbed(device));
    injectAlbums(width, height);
  }, [device, width, height]);

  useEffect(() => {
    // use mutation observer to detect client width of document.body changes
    // and re-render flickr embed script
    const observer = new ResizeObserver(() => {
      const currentDevice = getDevice();
      if (currentDevice !== device) {
        setDevice(currentDevice);
        const currentWidth = getWidthOfEmbed(currentDevice);
        const currentHeight = getHeightOfEmbed(currentDevice);
        setWidth(currentWidth);
        setHeight(currentHeight);
      }
    });
    observer.observe(document.body);
  }, [device]);

  return (
    <div
      id="flickr-container"
      className="tw-flex tw-flex-col tw-items-center tw-gap-10 tw-mb-12 tw-mt-2"
    />
  );
};

export default FlickrAlbums;
