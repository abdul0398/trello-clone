import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganisationPage = () => {
  const {userId, orgId} = auth()
  return (
    <div><OrganizationSwitcher/></div>
  )
}

export default OrganisationPage