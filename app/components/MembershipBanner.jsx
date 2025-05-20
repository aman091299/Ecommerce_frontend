import Image from 'next/image'

const MembershipBanner = () => {
  return (
    <div className="px-4 py-2 flex justify-center mt-10">
        <Image src="https://cti.farziengineer.co/hosted/Placeholder-1-Web-Membership_2158.5x253.5_px-5ca5a6d8d4f8.png?auto=format&sharp=20&ixlib=react-9.3.0"
         width={1180} height={400} alt="membership Banner" className="rounded-lg" />
    </div>
  )
}

export default MembershipBanner