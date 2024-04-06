import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-12 lg:p-16">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="prose lg:prose-xl max-w-3xl mx-auto">

        {/* //#region Introduction */}
        <div className='border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6'>
          <h1 className="text-2xl font-bold mb-4 text-red-400">Introduction</h1>
          <p className='m-2'>Welcome to Futurix Bank. These terms and conditions outline the rules and regulations for the use of our website.</p>
          <p className='m-2'>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Futurix Bank's website if you do not agree to all of the terms and conditions stated on this page.</p>
          <p className='m-2'>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all agreements: "Client," "You," and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions.</p>
          <p className='m-2'>Please read these terms and conditions carefully before using our website.</p>
        </div>
        {/* #endregion */}

        {/* #region IP Rights */}
        <div className='border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2'>
          <h2 className="text-2xl font-bold mb-4 text-red-400">Intellectual Property Rights</h2>
          <p className="text-lg text-gray-300 mb-4">
            Futurix Bank is committed to protecting its intellectual property rights and ensuring fair use of its materials. By accessing this website, you acknowledge and agree that all content, trademarks, logos, and other intellectual property displayed or utilized on this website are owned by Futurix Bank or its licensors.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            You are granted a limited, non-exclusive, non-transferable license to access and use the materials on this website for personal and non-commercial purposes only. This license does not permit you to modify, reproduce, republish, distribute, display, or transmit any part of the website's content without prior written consent from Futurix Bank.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Any unauthorized use of Futurix Bank's intellectual property may result in legal action. We reserve the right to enforce our intellectual property rights to the fullest extent permitted by law.
          </p>
          <p className="text-lg text-gray-300">
            If you have any questions regarding the use of our intellectual property or wish to request permission for any specific use, please contact us at [contact email].
          </p>
        </div>

        {/* #endregion */}

        {/* #region Restrictions */}
        <div className='border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2'>
          <h2 className="text-2xl font-bold mb-4 text-red-400">Restrictions</h2>
          <p className="text-lg text-gray-300 mb-4">
            To ensure a positive user experience and protect our services, users of the Futurix Bank website are restricted from the following actions:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Publishing any website material in any other media without prior authorization.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material without explicit permission.</li>
            <li>Using this website in any way that is or may be damaging to the website, including but not limited to hacking attempts, data breaches, or disruptive behavior.</li>
          </ul>
        </div>

        {/* #endregion */}

        {/* #region Limitation and Liability */}
        <div className="border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Limitation of Liability</h2>
          <p className="text-lg text-gray-300">In no event shall Futurix Bank, nor any of its officers, directors, and employees, be held liable for:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li className="flex items-start m-1">
              Any indirect, consequential, or incidental damages, including but not limited to loss of profits,  revenue, or data,arising out of or in connection with your use of this website
            </li>
            <li>Any errors or omissions in the content provided on the Futurix Bank website.</li>
            <li>Any unauthorized access to or alteration of your transmissions or data.</li>
            <li>Any interruption or cessation of transmission to or from the Futurix Bank website.</li>
            <li className="flex items-start m-1">Any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Futurix Bank website by any third-party.</li>
          </ul>
          <p className="m-2 text-gray-300">Futurix Bank, its officers, directors, and employees shall not be liable for any failure to perform its obligations under these terms and conditions if such failure is caused by events beyond its reasonable control, including but not limited to acts of God, war, terrorism, government regulations, natural disasters, strikes, or power failures.</p>
        </div>
        {/* #endregion */}

        {/* #region Indemnification */}
        <div className="border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Indemnification</h2>
          <p className="m-2 text-lg text-gray-300">By using the services provided by Futurix Bank, you agree to indemnify, defend, and hold harmless Futurix Bank and its affiliates, officers, directors, employees, agents, and partners from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from or related to:</p>
          <ul className="list-disc list-inside text-gray-300 m-2 ">
            <li className="m-2" >Your breach of these terms and conditions.</li>
            <li className="m-2" > Your violation of any law or the rights of a third-party.</li>
            <li className="m-2">Your use of the Futurix Bank website or services.</li>
            <li className="m-2">Any content or information you submit, post, transmit, or make available through the Futurix Bank website or services.</li>
            <li className="m-2">Any unauthorized access to or use of Futurix Bank's servers or any personal or financial information stored therein.</li>
          </ul>
          <p className="text-gray-300">Futurix Bank reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with Futurix Bank in asserting any available defenses.</p>
        </div>
        {/* #endregion */}

        {/* #region Serverability */}
        <div className="border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Severability</h2>
          <p className="m-2 text-gray-300">In the event that any provision of these terms and conditions is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these terms and conditions. The validity, legality, and enforceability of the remaining provisions shall not in any way be affected or impaired thereby.</p>
          <p className="m-2 text-gray-300">Futurix Bank is committed to ensuring that these terms and conditions are legally enforceable and consistent with applicable laws and regulations. If any provision is deemed invalid or unenforceable, it will be removed from the terms while preserving the validity and enforceability of the remaining provisions.</p>
        </div>
        {/* #endregion */}

        {/* #region Variation of Terms*/}
        <div className="border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Variation of Terms</h2>
          <p className="m-2 text-gray-300">Futurix Bank reserves the right to revise these terms and conditions at any time without prior notice. By using this website, you acknowledge and agree that it is your responsibility to review these terms periodically to stay informed of any changes. Your continued use of the website after such modifications will constitute acknowledgment and acceptance of the updated terms and conditions.</p>
          <p className="m-2 text-gray-300">We understand the importance of transparency and trust in our relationship with customers. Rest assured, any modifications or revisions to these terms will be made with careful consideration to ensure fairness, clarity, and compliance with applicable laws and regulations. If you have any questions or concerns regarding the terms and conditions, please don't hesitate to contact us.</p>
        </div>
        {/* #endregion */}

        {/* #region Entire Agreement*/}
        <div className="border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Entire Agreement</h2>
          <p className=" text-gray-300 m-2">These terms constitute the entire agreement between Futurix Bank and you in relation to your use of this website and supersede all prior agreements and understandings.</p>
          <p className=" text-gray-300 m-2">By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not access the website or use any of its services.</p>
          <p className=" text-gray-300 m-2">Futurix Bank reserves the right to update, modify, or change these terms at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of the website after the posting of any modifications constitutes acceptance of those changes.</p>
        </div>
        {/* #endregion */}

        {/* #region Governing Law & Jurisdiction */}
        <div className='border border-gray-300 bg-gray-900 rounded-lg p-6 md:p-8 lg:p-6 mt-2 '>
          <h2 className="text-2xl font-bold mb-4 text-red-400"> Governing Law & Jurisdiction</h2>
          <p className="m-2">"Futurix Neo Bank operates under the jurisdiction of Indian Constitution,  all terms and conditions outlined by the bank are subject to the laws and regulations of this jurisdiction. The bank adheres to strict compliance standards set forth by regulatory authorities to ensure transparency, security, and fairness in all banking operations."
          </p>
          <p className="m-2">
            Customers engaging with Futurix Neo Bank services implicitly agree to be governed by the laws of the jurisdiction under which the bank operates. Any disputes or legal matters arising between the bank and its customers fall under the exclusive jurisdiction of the state and federal courts located within this jurisdiction.
          </p>
          <p className="m-2">
            Futurix Neo Bank is committed to providing a trustworthy and reliable banking experience for its customers while upholding the highest legal and ethical standards prescribed by the regulatory authorities.
          </p>
        </div>
        {/* #endregion */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
