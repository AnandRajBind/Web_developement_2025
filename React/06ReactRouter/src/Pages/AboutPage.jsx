import React from 'react'
import {Form,useActionData } from 'react-router'

function AboutPage() {
  const actionData = useActionData()
  return (
<>
<div>AboutPage</div>
<Form method='post'>
  <button>submit</button>
</Form>
<h1>
  response: {JSON.stringify(actionData)}
</h1>
</>
)
}
export default AboutPage
