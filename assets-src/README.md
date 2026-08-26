# Source assets

Originals that are not deployed. Next.js only copies `public/` into the static
export, so nothing here ships to the site.

- `bitmoji-original.png` - the full-resolution cutout photo as uploaded (959x960).
  `public/images/logos/bitmoji.png` is derived from it: padded with 90px of
  transparent headroom, cropped to an 800px square centred on the head (x=462),
  and resized to 512x512 so it frames correctly inside the circular avatar in
  the About Me panel.
