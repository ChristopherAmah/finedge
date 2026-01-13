import React from 'react';
import { ShieldCheck, Mail, Phone, Globe, Lock, AlertCircle, FileText, CheckCircle2, Scale, ExternalLink, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24 font-sans selection:bg-[#3A358C] selection:text-white">
      {/* --- ELITE HEADER --- */}
      <div className="bg-white border-b border-[#D8CDFF]/40 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A358C]/5 text-[#3A358C] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <ShieldCheck size={14} />
            Data Protection Authority
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1A1655] tracking-tight mb-8">
            Privacy <span className="text-[#3A358C]">Policy</span>
          </h1>
          <div className="space-y-6 text-lg text-[#595959] leading-relaxed max-w-4xl">
            <p>
              <strong className="text-[#1A1655]">Finedge</strong> (“We”, “Our”, or “Us”) operate at 
              <a href="https://finedgesoftware.com/" className="text-[#3A358C] hover:underline ml-1 font-bold">https://finedgesoftware.com/</a> (the "website").
            </p>
            <p>
              FinEdge core banking is an advanced cloud-native internet banking and mobile banking solution that helps banks onboard, service and engage more efficiently. FinEdge brings your core operations, digital channels, and payment services into one powerful platform. Faster deployment, easier management, and a product built for African financial institutions.
            </p>
            <p>
              This Privacy Notice sets out Our practices and procedures regarding the collection, use and disclosure of your personal data and sensitive personal data when you visit, access, browse through and/or use our Services. You have control over the type of data that you make available to Us.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        {/* --- CRITICAL SCOPE ALERT --- */}
        <div className="bg-[#1A1655] rounded-3xl p-8 shadow-2xl shadow-indigo-200 text-white flex flex-col md:flex-row gap-6 items-center border border-white/10">
          <div className="bg-white/10 p-4 rounded-2xl">
            <AlertCircle size={32} className="text-[#D8CDFF]" />
          </div>
          <p className="text-sm opacity-90 leading-relaxed">
            <strong className="text-white block text-lg mb-1 font-bold">Scope of Notice</strong>
            This notice does not apply to products, services, websites, or content offered by third parties or to job applicants/employees, whose information is subject to different privacy notices.
          </p>
        </div>

        <main className="mt-20 space-y-24">
          
          {/* 1. GENERAL */}
          <section>
            <div className="flex flex-col md:flex-row gap-12 border-l-4 border-[#3A358C] pl-8">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-black text-[#1A1655]">01. <br/>General</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-[#595959] leading-relaxed">
                  Any changes we may make to this privacy notice in the future will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes to our privacy notice.
                </p>
              </div>
            </div>
          </section>

          {/* 2. DATA COLLECTION */}
          <section>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-black text-[#1A1655] sticky top-10">02. <br/>Collection</h2>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Information and content you provide",
                    "Platform credentials",
                    "Business Information",
                    "Name and email address for marketing communication sign-ups",
                    "Personal data (name, gender, email address, and telephone number)"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm items-center">
                      <div className="w-2 h-2 rounded-full bg-[#3A358C] shrink-0" />
                      <span className="text-sm font-bold text-[#1A1655]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-white rounded-3xl border border-[#D8CDFF] shadow-xl shadow-indigo-50/50">
                  <h4 className="font-bold text-[#3A358C] mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18}/> Additional Collection Methods
                  </h4>
                  <p className="text-sm text-[#595959] leading-relaxed mb-6">
                    We also collect and store data that you submit to us via email and through our contact form. We collect information using <strong>cookies</strong>.
                  </p>
                  <Link to="/cookie-policy" className="inline-flex items-center gap-2 text-sm font-black text-[#3A358C] hover:gap-3 transition-all">
                    READ OUR COOKIE POLICY <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. TYPES OF DATA (THE FULL LIST) */}
          <section className="bg-[#1A1655] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <ShieldAlert size={400} />
            </div>
            
            <h2 className="text-3xl font-bold mb-12 relative">03. Data Request & Retention</h2>
            
            <div className="grid lg:grid-cols-2 gap-16 relative">
              {/* 3.0 Request */}
              <div className="space-y-6">
                <h3 className="text-[#D8CDFF] font-black uppercase tracking-widest text-xs">Data Requested From You (3)</h3>
                <ul className="space-y-4">
                  {[
                    "Contact info (name, DOB, address, email, phone, first of kin)",
                    "Bank account details for payments",
                    "Passwords and security question answers",
                    "Financial interests, position, or loan repayment performance",
                    "Answers required by third-party credit reference agencies",
                    "Information about your activities in using the Platform",
                    "Information from directors/individuals associated with your business"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm opacity-90 border-b border-white/10 pb-3">
                      <CheckCircle2 size={18} className="text-[#D8CDFF] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.1 Retain */}
              <div className="space-y-6">
                <h3 className="text-[#D8CDFF] font-black uppercase tracking-widest text-xs">Information We May Retain (3.1)</h3>
                <ul className="space-y-4">
                  {[
                    "Correspondence, registration history, and materials posted",
                    "Passports/ID evidence for AML and anti-fraud purposes",
                    "Records of any surveys (optional)",
                    "Transaction details and receipt/disbursement of repayments",
                    "Details of visits to the Platform and resources accessed",
                    "(Explicit Consent) Physical or mental health or condition",
                    "(Explicit Consent) Information relating to criminal proceedings"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm opacity-90 border-b border-white/10 pb-3">
                      <CheckCircle2 size={18} className="text-[#D8CDFF] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3.2 & 3.3 Warning */}
            <div className="mt-12 grid md:grid-cols-2 gap-6 relative">
              <div className="bg-red-500/20 p-6 rounded-2xl border border-red-500/30">
                <p className="text-sm font-bold flex gap-2"><AlertCircle size={18}/> 3.2 Fraud Warning</p>
                <p className="text-xs opacity-80 mt-2 italic">If you give us false or inaccurate information, and we suspect or identify fraud, we will record this.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold">3.3 Third Parties</p>
                <p className="text-xs opacity-80 mt-2 italic">We may also receive information about you from third party brokers, introducers or other referrers.</p>
              </div>
            </div>
          </section>

          {/* 4. USE OF INFORMATION */}
          <section>
            <h2 className="text-3xl font-black text-[#1A1655] mb-10">04. Use of <span className="text-[#3A358C]">Information</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Enable or enhance system functionalities", "Contract with you and facilitate services", "Analyse safety and security of channels",
                "Test and apply new product versions/patches", "Improve the accuracy of our records", "Contact you about products of interest",
                "Fulfil requests and provide customer support", "Monitor, prevent and detect fraud/malware", "Deliver administrative notices/alerts",
                "Verify identity and assist with lost logins", "Troubleshoot and protect against crime", "Prevent misuse of the Website",
                "Meet legal requirements (court orders)", "Other purposes disclosed at time of collection"
              ].map((text, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-[#3A358C] transition-colors group">
                  <div className="w-6 h-6 rounded-full bg-[#3A358C]/5 flex items-center justify-center text-[#3A358C] font-bold text-[10px] mb-4 group-hover:bg-[#3A358C] group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-[13px] font-bold text-[#1A1655] leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5, 6, 7: LEGAL FOUNDATIONS */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-gray-100 rounded-4xl shadow-sm">
              <h3 className="font-black text-[#1A1655] mb-6 flex items-center gap-2"><Scale size={20} className="text-[#3A358C]"/> 05. Principles</h3>
              <ul className="space-y-3 text-xs font-bold text-[#595959]">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Fair & Lawful Manner</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Specific Purpose Limitation</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Data Minimization</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Accuracy of Records</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Storage Limitation</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3A358C] mt-1 shrink-0"/> Integrity & Security</li>
              </ul>
            </div>

            <div className="lg:col-span-2 p-8 bg-white border border-[#D8CDFF] rounded-4xl shadow-xl shadow-indigo-50/50">
              <h3 className="font-black text-[#1A1655] mb-6 flex items-center gap-2"><FileText size={20} className="text-[#3A358C]"/> 06. Lawful Basis</h3>
              <div className="grid md:grid-cols-2 gap-6 text-[13px] leading-relaxed text-[#595959]">
                <p><strong>Consent:</strong> Refuse or withdraw anytime via <strong>dpo@fifthlab.com</strong>. Consent form provided when used as basis.</p>
                <p><strong>Contract:</strong> Necessary for performance of a contract or pre-contractual steps.</p>
                <p><strong>Legal Obligation:</strong> Necessary where statutory obligations apply.</p>
                <p><strong>Legitimate Interests:</strong> Gaining insights, service improvement, customization, and enhancing security.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-[#1A1655] mb-2 text-sm">07. What constitutes consent?</h4>
                <p className="text-xs text-[#595959]">
                  Consent is given when: 1. You complete any form from FINEDGE; 2. You tick the acceptance box for T&Cs; 3. You accept cookies. 
                  <strong> To withdraw:</strong> Contact dpo@fifthlab.com.
                </p>
              </div>
            </div>
          </div>

          {/* 8. DATA SHARING */}
          <section>
            <h2 className="text-3xl font-black text-[#1A1655] mb-8 text-center">08. Disclosure of Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Analytics and Search Engines", "Hosting and Email platforms", "Completing contracts", "Maintenance authorized by CWG",
                "Public entities for compliance", "KYC & Credit Agencies", "Corporate group members", "Anti-fraud verification"
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F3F3F8] rounded-2xl text-[11px] font-black uppercase tracking-wider text-[#1A1655] flex items-center justify-center text-center">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
               <p className="inline-block px-6 py-3 bg-[#3A358C] text-white rounded-full text-xs font-bold uppercase tracking-widest">
                8.2 Non-Sale Clause: We will not sell your data to any third party.
               </p>
            </div>
          </section>

          {/* 9, 10, 11, 12, 13 (REMAINING CLAUSES) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A1655]">09. Storage Security</h3>
              <p className="text-sm text-[#595959]">Physical, electronic, and managerial procedures in place to safeguard and secure information online.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A1655]">10. Data Retention</h3>
              <p className="text-sm text-[#595959]">Kept for purposes described, legal provisions, or contracts. Usage data is generally kept shorter.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A1655]">11. Marketing</h3>
              <p className="text-sm text-[#595959]">Express opt-in required for third-party marketing. Stop messages anytime at dpo@fifthlab.com.</p>
            </div>
          </div>

          <section id="rights" className="text-center pt-10">
            <h2 className="text-3xl font-black text-[#1A1655] mb-12">12. Your Protected Rights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Access", "Erasure", "Rectify", "Object", "Portability", "Lodge Complaint"].map((right, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-3xl group hover:bg-[#3A358C] transition-all">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#3A358C] group-hover:bg-white/20 group-hover:text-white">
                    <Lock size={18} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#1A1655] group-hover:text-white">{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-[#595959] italic max-w-2xl mx-auto">
              <strong>13. Security:</strong> Despite safeguards, internet transmission is not entirely secure. We commit to doing our best to protect you.
            </p>
          </section>

          {/* 14, 15, 16, 17: TRANSFERS & COMPLAINTS */}
          <section className="bg-white border border-[#D8CDFF] rounded-[3rem] overflow-hidden">
            <div className="p-10 border-b border-gray-100">
               <h3 className="text-xl font-bold text-[#1A1655] mb-4">14. International Transfer of Data</h3>
               <p className="text-sm text-[#595959]">
                 Transfers outside Nigeria include TIAs and occur only under conditions such as Consent, Contract performance, Public interest, or Vital interests.
               </p>
            </div>
            <div className="grid lg:grid-cols-2">
              <div className="p-10 space-y-6">
                <h3 className="text-xl font-bold text-[#1A1655]">15. Remedy & Violation</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  Breaches reported to NITDA within 72 hours. We will notify you via email if risks to rights and freedoms exist. 
                  <strong> 16. Changes:</strong> Notice updated via email or prominent site notice.
                </p>
                <div className="flex items-center gap-4 text-[#3A358C] font-black">
                  <Mail /> <span>dpo@fifthlab.com</span>
                </div>
              </div>
              <div className="bg-[#1A1655] p-10 text-white">
                <h3 className="text-xl font-bold mb-6">NITDA Details</h3>
                <div className="space-y-3 text-sm opacity-90">
                  <p>Tel: +234 9 292 20263, +234 816 840 1851</p>
                  <p>Email: info@nitda.gov.ng</p>
                  <p>Website: www.nitda.gov.ng</p>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer className="mt-20 text-center pb-10 border-t border-gray-200 pt-10">
          <p className="text-[10px] font-bold text-[#7C7C8B] uppercase tracking-[0.3em]">
            Policy Approved by Management • Annual Review Cycle
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;