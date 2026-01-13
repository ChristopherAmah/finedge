import React from 'react';
import { ShieldCheck, Cookie, Info, MousePointer2, AlertCircle, Mail, Globe, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const cookieList = [
    { domain: "finedgesoftware.com", name: "cf7msm_checkSession", expiry: "Session" },
    { domain: "finedgesoftware.com", name: "wplc_cid", expiry: "24 hours" },
    { domain: "finedgesoftware.com", name: "tcx_customerID", expiry: "1 year" },
    { domain: "finedgesoftware.com", name: "nc_sid", expiry: "Session" },
    { domain: "finedgesoftware.com", name: "nc_status", expiry: "24 hours" },
    { domain: "finedgesoftware.com", name: "_icl_current_language", expiry: "24 hours" },
    { domain: "finedgesoftware.com", name: "wplc_chat_status", expiry: "24 hours" },
  ];

  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24 font-sans selection:bg-[#3A358C] selection:text-white">
      {/* --- ELITE HEADER --- */}
      <div className="bg-white border-b border-[#D8CDFF]/40 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* <Link to="/privacy-policy" className="inline-flex items-center gap-2 text-[#3A358C] text-xs font-bold uppercase tracking-widest mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Privacy
          </Link> */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#3A358C]/10 p-2 rounded-lg text-[#3A358C]">
              <Cookie size={24} />
            </div>
            <span className="text-[#3A358C] font-black text-sm uppercase tracking-[0.2em]">Compliance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1A1655] tracking-tight mb-8">
            Cookie <span className="text-[#3A358C]">Policy</span>
          </h1>
          <p className="text-xl text-[#595959] leading-relaxed max-w-3xl">
            This notice explains what Cookies are, how We use them, and your rights regarding the control of your browsing data.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        {/* --- INTRO CARD --- */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-indigo-100/50 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1A1655] mb-4">01. Introduction</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed">
            <p>
              This Cookies Notice explains what Cookies are and how We use them. You should read this Notice so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. 
            </p>
            <p>
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies.
            </p>
            <div className="flex items-start gap-3 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <Info className="text-[#3A358C] shrink-0 mt-1" size={18} />
              <p className="text-sm">
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use. For more, see our <Link to="/privacy-policy" className="text-[#3A358C] font-bold underline">Privacy Notice</Link>.
              </p>
            </div>
          </div>
        </div>

        <main className="mt-16 space-y-24">
          
          {/* 02. INTERPRETATION & DEFINITIONS */}
          <section>
            <h2 className="text-3xl font-black text-[#1A1655] mb-10 flex items-center gap-4">
               <span className="text-[#D8CDFF]">02.</span> Definitions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm">
                <p className="text-sm text-[#595959] leading-relaxed mb-6">
                  Cookies are small text files registered on your computer to "remember" your actions and preferences (login data, language, font size, etc.) so you don't need to reconfigure them.
                </p>
                <div className="space-y-4 border-t border-gray-100 pt-6 text-xs font-bold text-[#595959]">
                   <p><span className="text-[#3A358C] block uppercase tracking-tighter mb-1">Company</span> FINEDGE, Plot 10, Joshua Ebun Ojo Off Rufus Giwa, Lekki Phase 1, Lagos Nigeria.</p>
                   <p><span className="text-[#3A358C] block uppercase tracking-tighter mb-1">Website</span> accessible from finedgesoftware.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-[#1A1655] text-white rounded-2xl">
                  <h4 className="font-bold text-[#D8CDFF] text-sm mb-2">Technical Cookies</h4>
                  <p className="text-xs opacity-80">Used to send messages or provide services you request. Typically do not require consent.</p>
                </div>
                <div className="p-5 bg-white border border-[#D8CDFF] rounded-2xl">
                  <h4 className="font-bold text-[#3A358C] text-sm mb-2">Profiling Cookies</h4>
                  <p className="text-xs text-[#595959]">Used to create user profiles for advertising based on browsing behavior. Require specific consent.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 03. USE OF COOKIES */}
          <section>
            <h2 className="text-3xl font-black text-[#1A1655] mb-8">03. How We Use Cookies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { t: "Browsing/Session", d: "Strictly necessary for Website operation." },
                { t: "Analytics", d: "Tracking traffic and usage patterns." },
                { t: "Function", d: "Configuring the Website to your choices." },
                { t: "Profiling", d: "Observing preferences for targeted advertising." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-[#3A358C] transition-all">
                  <h4 className="text-[#1A1655] font-black text-sm mb-2 uppercase tracking-tight">{item.t}</h4>
                  <p className="text-xs text-[#7C7C8B] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl shadow-indigo-50/40 overflow-hidden">
               <div className="p-8 border-b border-gray-50 bg-[#F3F3F8]/30">
                 <h3 className="font-bold text-[#1A1655]">First Party Cookies present on Website</h3>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="text-[11px] font-black uppercase tracking-widest text-[#3A358C] bg-white">
                       <th className="px-8 py-5">Domain Name</th>
                       <th className="px-8 py-5">Cookie Name</th>
                       <th className="px-8 py-5 text-right">Expiry</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                     {cookieList.map((c, i) => (
                       <tr key={i} className="text-sm text-[#595959] hover:bg-indigo-50/30 transition-colors">
                         <td className="px-8 py-4">{c.domain}</td>
                         <td className="px-8 py-4 font-mono text-xs text-[#3A358C] font-bold">{c.name}</td>
                         <td className="px-8 py-4 text-right">{c.expiry}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </section>

          {/* 04 & 05. MANAGEMENT */}
          <section>
             <div className="flex flex-col md:flex-row gap-12">
               <div className="md:w-1/3">
                 <h2 className="text-3xl font-black text-[#1A1655]">04 & 05. <br/>Managing <br/>Cookies</h2>
               </div>
               <div className="md:w-2/3 space-y-6">
                 <p className="text-[#595959] leading-relaxed">
                   You can block or delete cookies via your browser options. Your preferences will be reset if different browsers are used to access the Website.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   {["Internet Explorer / Edge", "Firefox", "Chrome", "Safari"].map(b => (
                     <div key={b} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-[#1A1655] flex items-center gap-2 hover:border-[#3A358C] cursor-pointer transition-all">
                       <MousePointer2 size={14} className="text-[#3A358C]" /> {b}
                     </div>
                   ))}
                 </div>
                 <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex gap-4">
                    <AlertCircle className="text-red-600 shrink-0" />
                    <p className="text-xs text-red-900 leading-relaxed font-medium">
                        <strong>CAUTION:</strong> If you block technical cookies, the Website may become impossible to browse, and certain functions may become unavailable. You may have to manually enter information every time you visit.
                    </p>
                 </div>
               </div>
             </div>
          </section>

          {/* 06 & CONTACT */}
          <section className="bg-white border border-[#D8CDFF] rounded-[3rem] overflow-hidden">
            <div className="p-10 border-b border-gray-100">
               <h3 className="text-xl font-bold text-[#1A1655] mb-4">06. Withdraw Consent</h3>
               <p className="text-sm text-[#595959]">
                 If you do not wish to accept cookies, you may delete and block them via your browser settings. Refer to the browser instructions in Section 5.
               </p>
            </div>
            <div className="grid lg:grid-cols-2">
              <div className="p-10 space-y-6">
                <h3 className="text-xl font-bold text-[#1A1655]">Questions & Complaints</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  For any questions about this Cookies Policy, contact our internal DPO or the supervisory authority.
                </p>
                <div className="flex items-center gap-4 text-[#3A358C] font-black">
                  <Mail /> <span>dpo@thefinedgesoftware.com</span>
                </div>
              </div>
              <div className="bg-[#1A1655] p-10 text-white space-y-4">
                <h3 className="font-bold text-xl flex items-center gap-2 text-[#D8CDFF]">
                   <Globe size={20}/> NITDA (Supervisory)
                </h3>
                <p className="text-xs opacity-80 leading-relaxed italic">
                  Complaints regarding information technology and data protection can be sent via email.
                </p>
                <p className="text-sm font-bold">dpo@nitda.gov.ng</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-lg hover:bg-white hover:text-[#1A1655] transition-all">
                   Visit NITDA Website <ExternalLink size={14}/>
                </button>
              </div>
            </div>
          </section>

        </main>

        <footer className="mt-20 text-center pb-10 border-t border-gray-200 pt-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[10px] font-bold text-[#1A1655] uppercase tracking-[0.3em]">
              07. Approved by Management
            </p>
          </div>
          <p className="text-[10px] text-[#7C7C8B] uppercase tracking-widest">
            Reviewed Annually • Finedge Software
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CookiePolicy;