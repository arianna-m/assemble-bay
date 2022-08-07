import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fetcher from "../lib/fetcher";
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Nav from '../components/nav';

function Item({ item }) {
  const [image, setImage] = useState(item.Picture[0].url)
  const [audio, setAudio] = useState()

  useEffect(() => {
    setAudio(new Audio("https://cloud-r450r4ok8-hack-club-bot.vercel.app/0chomp_audio.mp4"))
  }, [])

  const onClick = () => {
    setImage("https://cloud-ji1wiykgk-hack-club-bot.vercel.app/0img_1956.jpg")
    audio.play()
  }

  return (
    <div className="hover:scale-105 transition-all duration-200 w-full flex flex-row lg:flex-col gap-4 border-4 border-gray-300 rounded-lg p-6"
      onClick={onClick}
    >
      <img id="picture" layout="fill" className="rounded-lg object-contain self-center h-72" src={image}/>
      <div className="pt-4 flex flex-col md:flex-row justify-between">
          <p className="text-xl font-bold">{item.Name}</p>
          <p> ${item.Price}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [image, setImage] = useState("")
  let data = useSWR("/api", fetcher).data;
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Nav />
      <section className="px-4 gap-6 grid md:grid-cols-3 justify-center">
        {data?.map((item) =>(
          <Item item={item} />
        ))}
      </section>
      <br></br>
    </>
  )
}
