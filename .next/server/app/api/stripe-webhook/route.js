"use strict";(()=>{var e={};e.id=7876,e.ids=[7876],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},2361:e=>{e.exports=require("events")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},2037:e=>{e.exports=require("os")},6774:(e,t,r)=>{let o,s,i;r.r(t),r.d(t,{originalPathname:()=>v,patchFetch:()=>P,requestAsyncStorage:()=>C,routeModule:()=>w,serverHooks:()=>k,staticGenerationAsyncStorage:()=>S});var a={};r.r(a),r.d(a,{POST:()=>_,dynamic:()=>f,runtime:()=>g});var n=r(9303),l=r(8716),c=r(670),p=r(1035),u=r(2591),d=r(8336);let f="force-dynamic",g="nodejs",h="phase-production-build"===process.env.NEXT_PHASE;function m(){return i||h||(i=(0,d.eI)("https://ahtpdsfpfypadhnchrtu.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodHBkc2ZwZnlwYWRobmNocnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNTA4MDksImV4cCI6MjA4OTgyNjgwOX0.yNVqoOsKzYG13l7_RDSCxdCtEK_SIQf6X7ray3y7M0s")),i}let b={nutrition:"nutrition",full_access:"full_access",upgrade_full_access:"full_access"};function E(e){return String(e||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function x({plan:e,email:t}){if(!process.env.RESEND_API_KEY||!t||h)return;let r=(s||h||!process.env.RESEND_API_KEY||(s=new u.R(process.env.RESEND_API_KEY)),s);if(!r)return;let o=function({plan:e,email:t}){let r=function(e){let t={nutrition:{name:"Nutrition",badge:"Nutrition Member",dashboardPath:"/dashboard",perks:["Daily nutrition routines","Recipe access","Smart grocery planning","Nutrition structure for solo or couple goals","Access to the Coaching page"]},full_access:{name:"Full Access",badge:"Full Access Member",dashboardPath:"/dashboard",perks:["Everything from Nutrition","Workout library","Programs","Plan Builder","Progress tracking","Couple Zone","Access to the Coaching page"]},upgrade_full_access:{name:"Full Access Upgrade",badge:"Full Access Member",dashboardPath:"/dashboard",perks:["Workout library unlocked","Programs unlocked","Plan Builder unlocked","Progress tracking unlocked","Couple Zone unlocked"]},coaching_call:{name:"Coaching Call",badge:"Coaching Call Purchased",dashboardPath:"/coaching",perks:["1 paid coaching call","Choose your preferred date and time","Reschedule request option","Training and nutrition review","Personal guidance from Fit Couple Club"]}};return t[e]||t.full_access}(e),o=process.env.NEXT_PUBLIC_SITE_URL||"https://fitcoupleclub.com",s=`${o}${r.dashboardPath}`,i=r.perks.map(e=>`
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="color:#ef4444;font-weight:900;">✓</span>
            <span style="color:#f5f5f5;margin-left:8px;">
              ${E(e)}
            </span>
           </td>
        </tr>
      `).join("");return{subject:`Welcome to Fit Couple Club — ${r.name}`,html:`
      <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 14px;">
          <tr>
            <td align="center">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#0b0b0b;border:1px solid rgba(255,255,255,0.10);border-radius:26px;overflow:hidden;">
                <tr>
                  <td style="padding:34px 28px;background:linear-gradient(135deg,#050505,#0b0b0b 55%,rgba(176,0,0,0.24));">
                    <div style="margin-bottom:26px;">
                      <img src="https://fitcoupleclub.com/images/fitcouple-logo.png" alt="Fit Couple Club" style="width:180px;max-width:100%;" />
                    </div>
                    <div style="display:inline-block;padding:8px 13px;border-radius:999px;background:rgba(176,0,0,0.18);border:1px solid rgba(176,0,0,0.38);color:#ef4444;font-size:12px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;">
                      ${E(r.badge)}
                    </div>
                    <h1 style="margin:22px 0 12px;font-size:38px;line-height:1.02;color:#ffffff;font-weight:950;">
                      Your transformation starts now.
                    </h1>
                    <p style="margin:0;color:rgba(255,255,255,0.74);font-size:17px;line-height:1.7;">
                      You officially joined Fit Couple Club.
                      Your dashboard, programs, nutrition system and transformation tools are now unlocked.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px;">
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:22px;">
                      <div style="color:rgba(255,255,255,0.48);font-size:12px;font-weight:900;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:8px;">
                        You bought
                      </div>
                      <div style="font-size:30px;line-height:1.1;font-weight:950;color:#ffffff;">
                        ${E(r.name)}
                      </div>
                      <div style="margin-top:10px;color:rgba(255,255,255,0.62);font-size:14px;">
                        Account: ${E(t)}
                      </div>
                    </div>
                    <h2 style="margin:28px 0 12px;color:#ffffff;font-size:24px;font-weight:950;">
                      What you unlocked
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${i}
                    </table>
                    <div style="text-align:center;margin:32px 0 10px;">
                      <a href="${s}" style="display:inline-block;background:#b00000;color:#ffffff;text-decoration:none;font-weight:950;font-size:16px;padding:16px 26px;border-radius:16px;">
                        Open Your Dashboard
                      </a>
                    </div>
                    <p style="margin:24px 0 0;color:rgba(255,255,255,0.68);font-size:15px;line-height:1.7;">
                      Start simple: open your dashboard,
                      choose the section you bought access to,
                      and follow the structure step by step.
                    </p>
                    <p style="margin:22px 0 0;color:#ffffff;font-size:15px;line-height:1.7;">
                      Welcome to the team,
                      <br />
                      <strong>Niels & Rosanna</strong>
                      <br />
                      Fit Couple Club
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 28px;background:#070707;border-top:1px solid rgba(255,255,255,0.08);">
                    <p style="margin:0;color:rgba(255,255,255,0.42);font-size:12px;line-height:1.6;text-align:center;">
                      Need help? Reply to this email or contact us through Fit Couple Club.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `}}({plan:e,email:t});await r.emails.send({from:"Fit Couple Club <noreply@fitcoupleclub.com>",to:[t],subject:o.subject,html:o.html})}async function R({userId:e,customerId:t,email:r,membershipType:o}){let s=m();if(!s)return null;let i=String(r||"").toLowerCase().trim(),a={membership_type:o,is_active:!0,...t?{stripe_customer_id:t}:{},...i?{email:i}:{}};if(e){let{error:t,count:r}=await s.from("profiles").update(a).eq("id",e).select("*",{count:"exact",head:!0});if(!t&&r>0)return null;t&&console.error("UPDATE BY USER ID ERROR:",t)}if(t){let{error:e,count:r}=await s.from("profiles").update(a).eq("stripe_customer_id",t).select("*",{count:"exact",head:!0});if(!e&&r>0)return null;e&&console.error("UPDATE BY CUSTOMER ID ERROR:",e)}if(i){let{error:e,count:t}=await s.from("profiles").update(a).eq("email",i).select("*",{count:"exact",head:!0});if(!e&&t>0)return null;e&&console.error("UPDATE BY EMAIL ERROR:",e)}if(e){let{error:r}=await s.from("profiles").upsert({id:e,email:i,membership_type:o,is_active:!0,...t?{stripe_customer_id:t}:{}},{onConflict:"id"});if(!r)return null;console.error("UPSERT PROFILE ERROR:",r)}return Error("No matching profile found to update.")}async function y({userId:e,customerId:t,email:r,stripeSessionId:o}){let s=m();if(!s)return null;let i=String(r||"").toLowerCase().trim(),{error:a}=await s.from("coaching_calls").insert({user_id:e||null,email:i||null,stripe_customer_id:t||null,stripe_session_id:o,status:"paid_unscheduled"});return a?(console.error("CREATE COACHING CALL CREDIT ERROR:",a),a):null}async function _(e){let t;if(h)return new Response(JSON.stringify({ok:!0,building:!0}),{status:200});let r=(o||h||(o=new p.ZP(process.env.STRIPE_SECRET_KEY)),o);if(!r)return new Response("Stripe not configured",{status:500});let s=await e.text(),i=e.headers.get("stripe-signature");if(!i)return new Response("Missing stripe-signature header",{status:400});try{t=r.webhooks.constructEvent(s,i,process.env.STRIPE_WEBHOOK_SECRET)}catch(e){return console.error("WEBHOOK SIGNATURE ERROR:",e.message),new Response(`Webhook Error: ${e.message}`,{status:400})}try{if("checkout.session.completed"===t.type){let e=t.data.object,r=String(e.customer||"").trim(),o=String(e.customer_email||e.customer_details?.email||e.metadata?.email||"").toLowerCase().trim(),s=String(e.metadata?.user_id||e.client_reference_id||"").trim(),i=function(e){let t=String(e||"").toLowerCase().trim();return"full access"===t||"full-access"===t?"full_access":"upgrade full access"===t||"upgrade-full-access"===t?"upgrade_full_access":"coaching call"===t||"coaching-call"===t?"coaching_call":t}(e.metadata?.plan);if(console.log("STRIPE ONE-TIME SESSION COMPLETED:",{session:e.id,customerId:r,userId:s,email:o,plan:i,paymentStatus:e.payment_status}),"paid"!==e.payment_status)return new Response("Session not paid",{status:200});if("coaching_call"===i){if(await y({userId:s,customerId:r,email:o,stripeSessionId:e.id}))return new Response("Coaching call credit failed",{status:500});try{await x({plan:i,email:o})}catch(e){console.error("WELCOME EMAIL ERROR:",e)}return new Response("ok",{status:200})}let a=b[i];if(!a)return console.error("NO MEMBERSHIP TYPE FOUND:",{session:e.id,plan:i}),new Response("No membership type found",{status:200});let n=await R({userId:s,customerId:r,email:o,membershipType:a});if(n)return console.error("SUPABASE UPDATE ERROR:",n.message),new Response("Database update failed",{status:500});try{await x({plan:i,email:o})}catch(e){console.error("WELCOME EMAIL ERROR:",e)}}return new Response("ok",{status:200})}catch(e){return console.error("WEBHOOK PROCESSING ERROR:",e),new Response("Webhook handler failed",{status:500})}}let w=new n.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/api/stripe-webhook/route",pathname:"/api/stripe-webhook",filename:"route",bundlePath:"app/api/stripe-webhook/route"},resolvedPagePath:"C:\\Github\\fit-couple-club\\app\\api\\stripe-webhook\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:C,staticGenerationAsyncStorage:S,serverHooks:k}=w,v="/api/stripe-webhook/route";function P(){return(0,c.patchFetch)({serverHooks:k,staticGenerationAsyncStorage:S})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[8948,8336,1035,2591],()=>r(6774));module.exports=o})();