import Homepage from '@/component/section/Homepage'
import Project from '@/component/section/Project'
import React from 'react'

const page = () => {
  return (
    <main>
      <section>
        <Homepage/>
      </section>
      <section>
        <Project />
      </section>
    </main>
  )
}

export default page