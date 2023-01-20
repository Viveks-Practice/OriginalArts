<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> 
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Art Gallery</h2>
  
        <div   class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> <!-- The grid for all the images margin on the top of the div, creating a 'grid', one column only, row gap is 10, column gap is 6, in small window have 2 columns, in large window, 4 columns, ??-->
          <div @click="imageClick(product.name)" v-for="product in products" :key="product.id" class="group relative">
            <div class="min-h-max aspect-w-4 aspect-h-4 w-full overflow-scroll rounded-lg bg-gray-300 group-hover:opacity-50 lg:aspect-none lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Home',
    components: {

    },
    mounted() {
      // console.log(import.meta.env.VITE_APP_TEST)
    },
    methods: {
      imageClick(artname) {
        this.$router.push({name: 'ProductDetails', params: { productname: artname, param1: "first", param2: "second" } })
      }
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Heaven\'s Oasis',
            href: '#',
            imageSrc: 'src/assets/Huge Kingman/signal-2022-10-25-173408.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$459',
            color: 'Eugene Kingman',
          },
          {
            id: 2,
            name: 'Asian Paradise',
            href: '#',
            imageSrc: 'src/assets/Long Asian Cozy Pond/signal-2022-10-27-002547_002.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$119',
            color: 'Chang',
          },
          {
            id: 3,
            name: 'Stormy Shores',
            href: '#',
            imageSrc: 'src/assets/signal-2022-11-17-201959_002.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$139',
            color: 'Simon',
          },
          {
            id: 4,
            name: '',
            href: '#',
            imageSrc: 'src/assets/signal-2022-10-02-101353_006.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 6,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 7,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 8,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 9,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
      // More products...
        ]
      }
    },
  }

  </script>