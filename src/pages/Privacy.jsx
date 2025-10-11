import PrivacyTerms from "../components/PrivacyTerms"

 

const Privacy = () => {
  return (
    <div id='privacy' className='py-20 px-5 md:px-[7%]'>
        <h1 className=" text-center text-xl font-['GilroyRegular'] ">Privacy Policy</h1>
        <div id="privacy-terms" className="py-4 flex flex-col gap-4">
            <PrivacyTerms
             title={"1. Information We Collect"} 
             desc={"We collect information you provide directly to us, such as when you create an account, update your profile, or interact with the app. This may include your name, email address, and any content you submit."}
            />

            <PrivacyTerms
             title={"2. How We Use Your Information"}
             desc={"We use the information we collect to provide, maintain, and improve our services including personalizing your experience, communicating with you, and ensuring the security of our app."}
            />
            
            <PrivacyTerms
             title={"3. Information Sharing"}
             desc={"We may share your information with service providers who assist us in operating the app, conducting our business, or servicing you, as long as those parties agree to keep this information confidential."}
            />
            
            <PrivacyTerms
             title={"4. Data Security"}
             desc={"We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."}
            />

            <PrivacyTerms
             title={"5. Your Rights"}
             desc={"You have the right to access, update, or delete your personal information. You can also object to or restrict certain processing of your information."}/>

            <PrivacyTerms
             title={"6. Changes to This Policy"} 
             desc={"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."}
            />
        </div>
    </div>
  )
}

export default Privacy