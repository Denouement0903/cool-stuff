import jake from '@/app/assets/jake.jpg';
import Image from 'next/image';

export default function Carousel() {
    return (
        <section className="">
            <div className="flex flex-row gap-8 w-screen h-screen transition-all duration-500 ease-in-out bg-[url('../app/assets/HD-wallpaper-plain-black-black.jpg')] bg-no-repeat bg-center bg-cover hover:bg-[url('../app/assets/wallpaperflare.com_wallpaper.jpg')] hover:bg-cover">
                <div className="flex-col px-8 py-8 transition ease-in-out delay-150 duration-500 hover:-translate-y-6">
                        <Image
                            className="rounded-lg"
                            src={jake}
                            alt="jake"
                            width={200}
                            height={200}
                            priority
                            />
                </div>
            </div>
        </section>
    );
}
