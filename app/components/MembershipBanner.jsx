import Image from 'next/image'

const MembershipBanner = () => {
  return (
    <div className="px-4 py-2 flex justify-center mt-10 ">
    <div className="h-[200px] w-[1180px]  relative">
        <Image src="https://cti.farziengineer.co/hosted/Placeholder-1-Web-Membership_2158.5x253.5_px-5ca5a6d8d4f8.png?auto=format&sharp=20&ixlib=react-9.3.0"
        fill alt="membership Banner" className="rounded-lg" />
    </div>
    </div>
  )
}

export default MembershipBanner