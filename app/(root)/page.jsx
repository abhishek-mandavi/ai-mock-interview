import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const page = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center justify-between gap-10 p-6 bg-white rounded-2xl shadow-lg card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-2xl font-bold">
           Ace Your Next Interview with AI-Powered Practice  
          </h2>
          <p className="text-lg">
           Get confident with real questions and actionable feedback 
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='robo' width={400} height={400} className="max-sm:hidden"/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
          {/* <p>You haven't taken any interviews yet</p> */}
        </div>
      </section>


      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
      </section>

      <div className="interviews-section">
       {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    </>
  )
}

export default page
