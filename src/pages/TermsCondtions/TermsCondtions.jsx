import React, { useRef, useEffect, useState, Suspense } from "react";
import { aboutImg, ourMission, ourVision } from "../../assets/images/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const TermsCondtions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-5 px-6 lg:px-0">
      <div className="benefit_section my-0 lg:my-8">
        <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-0 pt-6 mb-0">
          Terms &amp; Conditions
        </h2>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Introduction
        </h3>
        <p className="text-sm lg:text-base pb-4">
          The{" "}
          <Link className="text-[#af8a3d] hover:text-black" to="/">
            https://AzzyWrites.com
          </Link>{" "}
          website and associated applications (the &quot;Site&quot;) are
          comprised of various web pages. The Site is offered to you conditioned
          on your acceptance without modification of the terms, conditions, and
          notices contained herein (the &quot;Terms&quot;). Your use of the Site
          constitutes your agreement to all such Terms. Please read these terms
          carefully and keep a copy for your reference.  Privacy
        </p>
        <p className="text-sm lg:text-base pb-4">
          Your use of{" "}
          <Link className="text-[#af8a3d] hover:text-black" to="/">
            https://AzzyWrites.com
          </Link>{" "}
          is subject to AzzyWrites Privacy Statement. Please review our Privacy
          Statement, which also governs the Site and informs users of our data
          collection practices.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Electronic communications 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          Visiting{" "}
          <Link className="text-[#af8a3d] hover:text-black" to="/">
            https://AzzyWrites.com
          </Link>
          , creating content or sending emails constitutes electronic
          communications. You consent to receive electronic communications and
          you agree that all agreements, notices, disclosures and other
          communications that we provide to you electronically, via email and on
          the Site, satisfy any legal requirement that such communications be in
          writing.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          You’re account 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          If you use this site, you are responsible for maintaining the
          confidentiality of your account and password and for restricting
          access to your computer, and you agree to accept responsibility for
          all activities that occur under your account or password. You may not
          assign or otherwise transfer your account to any other person or
          entity. You acknowledge that AzzyWrites is not responsible for third
          party access to your account that results from theft or
          misappropriation of your account. Conker and its associates reserve
          the right to refuse or cancel service, terminate accounts, or remove
          or edit content in our sole discretion.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Users under age eighteen 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          AzzyWrites requires all logged-in users to indicate whether they are
          18 years of age, or under 18 years of age, at the time that they
          sign-in. Users under the age of 18 will receive a more limited
          experience, with certain features and email communications disabled.
          We are undertaking all practicable steps to anonymize the activity of
          users under the age of eighteen. More information can be found in our
          Privacy Statement. 
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Cancellation/Refund policy
        </h3>
        <p className="text-sm lg:text-base pb-4">
          You may cancel your AzzyWrites.com account at any time
        </p>
        <p className="text-sm lg:text-base pb-4">
          No Unlawful or Prohibited Use/Intellectual Property  You are granted a
          non-exclusive, non-transferable, revocable license to access and use
          AzzyWrites.com strictly in accordance with these terms of use. As a
          condition of your use of the Site, you warrant to AzzyWrites.com that
          you will not use the Site for any purpose that is unlawful or
          prohibited by these Terms. You may not use the Site in any manner
          which could damage, disable, overburden, or impair the Site or
          interfere with any other party's use and enjoyment of the Site. You
          may not obtain or attempt to obtain any materials or information
          through any means not intentionally made available or provided for
          through the Site. 
        </p>
        <p className="text-sm lg:text-base pb-4">
          All content included as part of the Service, such as text, graphics,
          logos, images, as well as the compilation thereof, and any software
          used on the Site, is the property of AzzyWrites.com or its suppliers
          and protected by copyright and other laws that protect intellectual
          property and proprietary rights. You agree to observe and abide by all
          copyright and other proprietary notices, legends or other restrictions
          contained in any such content and will not make any changes thereto.
          You will not modify, publish, transmit, reverse engineer, participate
          in the transfer or sale, create derivative works, or in any way
          exploit any of the content, in whole or in part, found on the Site.
        </p>
        <p className="text-sm lg:text-base pb-4">
          AzzyWrites.com content is not for resale. Your use of the Site does
          not entitle you to make any unauthorized use of any protected content,
          and in particular you will not delete or alter any proprietary rights
          or attribution notices in any content. You will use protected content
          solely for your personal use and will make no other use of the content
          without the express written permission of AzzyWrites.com and the
          copyright owner. You agree that you do not acquire any ownership
          rights in any protected content. We do not grant you any licenses,
          express or implied, to the intellectual property of AzzyWrites.com or
          our licensors except as expressly authorized by these Terms. 
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          International users 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          The Service is controlled, operated and administered by AzzyWrites.com
          from our offices within the UK. If you access the Service from a
          location outside the UK, you are responsible for compliance with all
          local laws. You agree that you will not use the AzzyWrites.com
          contents accessed through https:// AzzyWrites.com in any country or in
          any manner prohibited by any applicable laws, restrictions or
          regulations.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Indemnification 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          You agree to indemnify, defend and hold harmless AzzyWrites.com, its
          officers, directors, employees, agents and third parties, for any
          losses, costs, liabilities and expenses (including reasonable
          solicitors fees) relating to or arising out of your use of or
          inability to use the Site or services, any user postings made by you,
          your violation of any terms of this Agreement or your violation of any
          rights of a third party, or your violation of any applicable laws,
          rules or regulations. AzzyWrites.com reserves the right, at its own
          cost, to assume the exclusive defence and control of any matter
          otherwise subject to indemnification by you, in which event you will
          fully cooperate with Conker in asserting any available defences.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Class action waiver 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          Any arbitration under these terms and conditions will take place on an
          individual basis; class arbitrations and
          class/representative/collective actions are not permitted. the parties
          agree that a party may bring claims against the other only in each's
          individual capacity, and not as a plaintiff or class member in any
          putative class, collective and/ or representative proceeding, such as
          in the form of a private attorney general action against the other.
          Further, unless both you and Conker agree otherwise, the arbitrator
          may not consolidate more than one person's claims and may not
          otherwise preside over any form of a representative or class
          proceeding.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Liability disclaimer 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          The information, software, products, and services included in or
          available through the site may include inaccuracies or typographical
          errors. Changes are periodically added to the information herein.
          Conker and/or its suppliers may make improvements and/or changes in
          the site at any time. 
        </p>
        <p className="text-sm lg:text-base pb-4">
          azzywrites.com and/or its suppliers make no representations about the
          suitability, reliability, availability, timeliness, and accuracy of
          the information, software, products, services and related graphics
          contained on the site for any purpose. To the maximum extent permitted
          by applicable law, all such information, software, products, services
          and related graphics are provided "as is" without warranty or
          condition of any kind. Conker and/or its suppliers hereby disclaim all
          warranties and conditions with regard to this information, software,
          products, services and related graphics, including all implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, title and non-infringement.
        </p>
        <p className="text-sm lg:text-base pb-4">
          to the maximum extent permitted by applicable law, in no event shall
          conker and/or its suppliers be liable for any direct, indirect,
          punitive, incidental, special, consequential damages or any damages
          whatsoever including, without limitation, damages for loss of use,
          data or profits, arising out of or in any way connected with the use
          or performance of the site, with the delay or inability to use the
          site or related services, the provision of or failure to provide
          services, or for any information, software, products, services and
          related graphics obtained through the site, or otherwise arising out
          of the use of the site, whether based on contract, tort, negligence,
          strict liability or otherwise, even if conker or any of its suppliers
          has been advised of the possibility of damages. Because some
          states/jurisdictions do not allow the exclusion or limitation of
          liability for consequential or incidental damages, the above
          limitation may not apply to you. if you are dissatisfied with any
          portion of the site, or with any of these terms of use, you’re sole
          and exclusive remedy is to discontinue using the site.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Termination/Access restriction 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          AzzyWrites.com reserves the right, in its sole discretion, to
          terminate your access to the Site and the related services or any
          portion thereof at any time, without notice. To the maximum extent
          permitted by law, this agreement is governed, and you hereby consent
          to the exclusive jurisdiction and venue of courts in UK in all
          disputes arising out of or relating to the use of the Site. Use of the
          Site is unauthorized in any jurisdiction that does not give effect to
          all provisions of these Terms, including, without limitation, this
          section. You agree that no joint venture, partnership, employment, or
          agency relationship exists between you and AzzyWrites.com as a result
          of this agreement or use of the Site. 
        </p>
        <p className="text-sm lg:text-base pb-4">
          You agree that no joint venture, partnership, employment, or agency
          relationship exists between you and AzzyWrites.com as a result of this
          agreement or use of the Site. AzzyWrites.com performance of this
          agreement is subject to existing laws and legal process, and nothing
          contained in this agreement is in derogation of AzzyWrites.com right
          to comply with governmental, court and law enforcement requests or
          requirements relating to your use of the Site or information provided
          to or gathered by C AzzyWrites.com with respect to such use.
        </p>
        <p className="text-sm lg:text-base pb-4">
          If any part of this agreement is determined to be invalid or
          unenforceable pursuant to applicable law including, but not limited
          to, the warranty disclaimers and liability limitations set forth
          above, then the invalid or unenforceable provision will be deemed
          superseded by a valid, enforceable provision that most closely matches
          the intent of the original provision and the remainder of the
          agreement shall continue in effect. Unless otherwise specified herein,
          this agreement constitutes the entire agreement between the user and
          AzzyWrites.com with respect to the Site and it supersedes all prior or
          contemporaneous communications and proposals, whether electronic, oral
          or written, between the user and AzzyWrites.com with respect to the
          Site. A printed version of this agreement and of any notice given in
          electronic form shall be admissible in judicial or administrative
          proceedings based upon or relating to this agreement to the same
          extent and subject to the same conditions as other business documents
          and records originally generated and maintained in printed form. It is
          the express wish to the parties that this agreement and all related
          documents be written in English.
        </p>
        <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
          Changes to terms 
        </h3>
        <p className="text-sm lg:text-base pb-4">
          AzzyWrites.com reserves the right, in its sole discretion, to change
          the Terms, under which The Site is offered, for example to reflect
          changes to the law or changes to our Services. The most current
          version of the Terms will supersede all previous versions, and we will
          notify you about material changes by sending a notice to the primary
          email address specified in your account, by placing a prominent notice
          on our site, and by updating this page.
        </p>
      </div>
    </div>
  );
};

export default TermsCondtions;
