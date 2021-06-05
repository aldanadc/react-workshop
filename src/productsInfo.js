const productosInfo = [
  {
    img: "https://placeimg.com/300/100",
    nombre: "Product 1",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 299,
    categoria: "Descuentos"
  },
  {
    img: "https://placeimg.com/200/100",
    nombre: "Product 2",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 399
  },
  {
    img: "https://placeimg.com/400/100",
    nombre: "Product 3",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 499
  },
  {
    img: "https://placeimg.com/500/100",
    nombre: "Product 4",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 599
  },
  {
    img: "https://placeimg.com/600/100",
    nombre: "Product 5",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 699
  },
  {
    img: "https://placeimg.com/700/100",
    nombre: "Product 6",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 799
  },
  {
    img: "https://placeimg.com/800/100",
    nombre: "Product 7",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 899
  },
  {
    img: "https://placeimg.com/900/100",
    nombre: "Product 8",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 999
  },
  {
    img: "https://placeimg.com/700/100",
    nombre: "Product 9",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1099
  },
  {
    img: "https://placeimg.com/200/100",
    nombre: "Product 10",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1199
  },
  {
    img: "https://placeimg.com/500/100",
    nombre: "Product 11",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1299
  },
  {
    img: "https://placeimg.com/100/100",
    nombre: "Product 12",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1399
  },
  {
    img: "https://placeimg.com/600/100",
    nombre: "Product 13",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1499
  },
  {
    img: "https://placeimg.com/700/100",
    nombre: "Product 14",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1599
  },
  {
    img: "https://placeimg.com/800/100",
    nombre: "Product 15",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1699
  },
  {
    img: "https://placeimg.com/300/100",
    nombre: "Product 16",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1799
  },
  {
    img: "https://placeimg.com/430/100",
    nombre: "Product 17",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1899
  },
  {
    img: "https://placeimg.com/900/100",
    nombre: "Product 18",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 1999
  },
  {
    img: "https://placeimg.com/400/100",
    nombre: "Product 19",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 2099
  },
  {
    img: "https://placeimg.com/200/100",
    nombre: "Product 20",
    descripcion: `Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque.
      Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi
      maximus porta nec vitae odio. Proin vitae magna a massa accumsan
      venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem
      imperdiet lorem, tempor aliquet ligula lorem sit amet nibh.
      Suspendisse potenti.`,
    precio: 2199
  },
];


export default productosInfo;