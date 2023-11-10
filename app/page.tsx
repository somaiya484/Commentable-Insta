import Link from "next/link";
import Image from 'next/image'
import { BsCardImage, BsClipboardMinus, BsFillPersonPlusFill, BsShareFill } from 'react-icons/bs'
import { CgAttachment } from 'react-icons/cg'
import { AiFillAudio } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { FaRegCommentDots } from 'react-icons/fa'

async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts = await fetchBlogs();
  console.log(posts);

  return (
    <main className="md:w-2/4 sm:w-3/4 m-auto ">
      <div className="rounded-lg bg-zinc-800 drop-shadow-xl">
        <div className=" p-4 m-auto my-5 flex justify-between px-4 border-b border-zinc-700 pb-3">

          <img src="https://i.ibb.co/k4gnnWh/LIE-CHUNG-CHUNG-LEE.jpg" className="w-14 h-14 rounded-full" alt="" />

          <div className="w-[80%]">
            <input type="text" placeholder="What's in your mind" className="rounded-3xl bg-zinc-600 shadow py-3 px-3 w-full" name="" id="" />
          </div>
        </div>

        <div className="text-zinc-500 text-xs pb-4 flex justify-between px-4">
          <div className="flex items-center gap-2">
            <BsCardImage></BsCardImage>
            <span>image</span>
          </div>
          <div className="flex items-center gap-2">
            <BsClipboardMinus></BsClipboardMinus>
            <span>Clip</span>
          </div>
          <div className="flex items-center gap-2">
            <CgAttachment></CgAttachment>
            <span>Attachment</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillAudio></AiFillAudio>
            <span>Audio</span>
          </div>
          <button className="bg-blue-600 px-2 py-1 text-white rounded-xl">Post</button>
        </div>

      </div>

      <div className="rounded-lg bg-zinc-800 drop-shadow-xl px-4 mb-24">
        <div className=" m-auto my-5 flex justify-between  py-3">

          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/cYgf7R9/img.jpg" className="w-12 h-12  rounded-full" alt="" />
            <div className="text-white text-sm">
              <p>Min Lee</p>
              <p className="text-xs text-zinc-400">New York, CA</p>
            </div>

          </div>
          <div>
            <button className="bg-blue-600 p-2 text-lg text-white rounded-full"><BsFillPersonPlusFill></BsFillPersonPlusFill></button>
          </div>
        </div>

        <p className="text-zinc-300">A pair of tailored shorts can also be worn to the office, especially if you have a casual workplace. Pair them with a blouse or button-down shirt and sandals or flats.</p>

        <img src="https://i.ibb.co/RHRmsvR/Getty-Images-1487024894-de0be56cef7a475ba78856bc977842b7.webp" className="mt-5" alt="" />

        <div className="text-zinc-300 mt-3 pb-3 px-1 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FcLike></FcLike>
            <p>200</p>
          </div>
          <BsShareFill></BsShareFill>
        </div>

        <div className="flex mt-1 pb-6 w-3/4">
          <Link
            href={"/blog/add"}
            className="text-zinc-400 pb-1 mb-8 border-b border-zinc-600  w-full "
          >
            add a comment
          </Link>
        </div>

        {/* Comment */}
        <div className="w-full flex  flex-col justify-center items-center text-zinc-200">
          {posts?.map((post: any) => (
            <div key={post.id} className="w-3/4 px-2 rounded-md mx-3 my-2 flex flex-col justify-center bg-zinc-600">
              <div>
                {/* Title and Action */}
                <div className="flex items-center my-3">
                  <div className="mr-auto">
                    <h2 className="mr-auto font-semibold text-xs">{post.title}</h2>
                  </div>
                </div>

                <div className=" mr-auto my-1">
                  <h2>{post.description}</h2>
                </div>
              </div>
              {/* Date & Description */}
              <div className="mr-auto my-1">
                <blockquote className="font-thin text-xs text-zinc-00">
                  {new Date(post.date).toDateString()}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}