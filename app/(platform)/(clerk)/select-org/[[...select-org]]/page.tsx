import { OrganizationList } from "@clerk/nextjs"
const SelectOrgpage = () => {
  return (
    <div>
        <OrganizationList
          hidePersonal
          afterSelectOrganizationUrl={"/organisation/:id"}
          afterCreateOrganizationUrl={"/organisation/:id"}
        />
    </div>
  )
}

export default SelectOrgpage