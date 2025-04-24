import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews,  } from '@/lib/actions/general.action';

const page = async () => {

  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id),
    getLatestInterviews({ userId: user?.id}),
  ]);


  
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = allInterview?.length > 0;


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
          {hasPastInterviews ? (
            userInterviews?.map ((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))

          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        
        </div>
      </section>


      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
      </section>

      <div className="interviews-section">
        {hasUpcomingInterviews ? (
          allInterview?.map((interview) => (
            <InterviewCard
              key={interview.id}
              userId={user?.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))
        ) : (
          <p>There are no interviews available</p>
        )}
      </div>
    </>
  )
}

export default page
