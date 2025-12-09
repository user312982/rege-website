<template>
    <section class="bg-white py-16">
        <!-- Header & Intro dalam container normal -->
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
            <!-- Header -->
            <div class="mb-12">
                <p class="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">
                    REGE - RENEWABLE ENERGY
                </p>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Reach
                </h2>
            </div>

            <!-- Intro Text -->
            <div class="mb-16">
                <div class="max-w-lg">
                    <p class="text-gray-700">
                        We've reached a global audience with our clean energy solutions for a sustainable world.
                    </p>
                </div> 
            </div>
        </div>

        <!-- Stats + Photo: Full width dengan padding left only -->
        <div class="pl-6 lg:pl-[calc((100vw-80rem)/2+2rem)]">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <!-- Stats (Kiri) -->
                <div class="flex flex-row gap-8">
                    <div>
                        <p class="text-[#A4640A] text-[40px] font-bold">80</p>
                        <p class="text-gray-700 text-center">Asia</p>
                    </div>
                    <div>
                        <p class="text-[#A4640A] text-[40px] font-bold">157</p>
                        <p class="text-gray-700 text-center">Europe</p>
                    </div>
                    <div>
                        <p class="text-[#A4640A] text-[40px] font-bold">20</p>
                        <p class="text-gray-700 text-center">Americas</p>
                    </div>
                </div>

                <!-- Photo nempel kanan secara natural -->
                <div>
                    <img 
                        src="../../assets/technologies/reach.png" 
                        alt="Solar panel installation"
                        class="w-full md:w-auto max-w-md lg:max-w-lg"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
