// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

// let renderCount = 0;

// function Form() {
//   const { register, control, handleSubmit, formState } = useForm({
//     defaultValues : {
//       username : "Omair yahya",

//     }
//   });
//   const { errors } = formState;
//   const [showThankYou, setShowThankYou] = useState(false);

//   const isEmailValid = (email) => {
//     const allowedEmails = [
//       "omairyahya55@gmail.com",
//       "omairyahya94@gmail.com",
//       "adminomair@gmail.com",
//       "admin55@gmail.com",
//     ];

//     return allowedEmails.includes(email);
//   };

//   const onSubmit = (DATA) => {
//     console.log("Form Submitted successfully", DATA);
//     setShowThankYou(true);
//   };

//   renderCount++;
//   return (
//     <>
//       <div>
//         <h2>Omair's_Foundation {renderCount / 2}</h2>
//         {showThankYou ? (
//           <h3>
//             Thanks <br /> Your Form has been submitted <br /> TO <br /> Omair's Foundation 
//           </h3>
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)} validate>
//             <label htmlFor="username">Username:</label>

//             <input
//               type="text"
//               id="username"
//               {...register("username", {
//                 required: "Username is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9\s]*$/,
//                   message: "Name shouldn't be empty",
//                 },
//               })}
//               // defaultValue="DefaultUsername"
//             />

//             <p className="error-msg">{errors.username?.message}</p>

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", {
//                 required: "Email is required",
//                 validate: (email) =>
//                   isEmailValid(email) ||
//                   "This email is not registered in our client list, sorry",
//               })}
//             />
//             <p className="error-msg">{errors.email?.message}</p>

//             <label htmlFor="events">Event:</label>
//             <input
//               type="text"
//               id="events"
//               {...register("events", {
//                 required: "Event is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9 ]*$/,
//                   message: "i.e: cricket, football, gulf",
//                 },
//               })}
//             />
            

//             <p className="error-msg">{errors.events?.message}</p>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               {...register("password", {
//                 required: "Password is required",
//                 pattern: {
//                   value: /^(?=.*)(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/,
//                   message:
//                     "Password must be 8-20 characters and include special characters, numbers, and capital letters.",
//                 },
//               })}
//             />

//             <p className="error-msg">{errors.password?.message}</p>

//             <button type="submit">Submit</button>
//           </form>
//         )}
//         <DevTool control={control} />
//       </div>
//     </>
//   );
// }

// export default Form;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "Omair yahya",
    },
  });
  const { errors } = formState;
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState(null);

  const isEmailValid = (email) => {
    const allowedEmails = [
      "omairyahya55@gmail.com",
      "omairyahya94@gmail.com",
      "adminomair@gmail.com",
      "admin55@gmail.com",
    ];

    return allowedEmails.includes(email);
  };

  const onSubmit = (data) => {
    console.log("Form Submitted successfully", data);
    setSubmittedUsername(data.username);
    setShowThankYou(true);
  };

  renderCount++;
  return (
    <>
      <div>
        <h2>Omair's_Foundation {renderCount / 2}</h2>
        {showThankYou ? (
          <h3>
            Thanks <br /> Form successfully Submitted <br />
            {submittedUsername && (
              <>
                 <strong>{submittedUsername} we will contact you via email</strong>
              </>
            )}
          </h3>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} validate>
            <label htmlFor="username">Username:</label>

            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9\s]*$/,
                  message: "Name shouldn't be empty",
                },
              })}
              // defaultValue="DefaultUsername"
            />

            <p className="error-msg">{errors.username?.message}</p>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                validate: (email) =>
                  isEmailValid(email) ||
                  "This email is not registered in our client list, sorry",
              })}
            />
            <p className="error-msg">{errors.email?.message}</p>

            <label htmlFor="events">Event:</label>
            <input
              type="text"
              id="events"
              {...register("events", {
                required: "Event is required",
                pattern: {
                  value: /^[a-zA-Z0-9 ]*$/,
                  message: "i.e: cricket, football, gulf",
                },
              })}
            />

            <p className="error-msg">{errors.events?.message}</p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*)(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/,
                  message:
                    "Password must be 8-20 characters and include special characters, numbers, and capital letters.",
                },
              })}
            />

            <p className="error-msg">{errors.password?.message}</p>

            <button type="submit">Submit</button>
          </form>
        )}
        <DevTool control={control} />
      </div>
    </>
  );
}

export default Form;



























//UPDATE FORM WITH SPECIFIED EMAILS AND STRICT PASSWORD ...

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

// let renderCount = 0;

// function Form() {
//   // const form = useForm();
//   const { register, control, handleSubmit, formState } = useForm();
//   const { errors } = formState;
//   const [showThankYou, setShowThankYou] = useState(false);

//   const isEmailValid = (email) => {
//     const allowedEmails = [
//       "omairyahya55@gmail.com",
//       "omairyahya94@gmail.com",
//       "adminomair@gmail.com",
//       "admin55@gmail.com",
//     ];

//     return allowedEmails.includes(email);
//   };

//   const onSubmit = (DATA) => {
//     console.log("Form Submitted successfully", DATA);
//     setShowThankYou("Thank You your form is submitted 💡")
//   };

//   renderCount++;
//   return (
//     <>
//       <div>

//         <h2>Omair's_Foundation {renderCount / 2}</h2>
//         <form onSubmit={handleSubmit(onSubmit)} validate>
//           <label htmlFor="username">Username:</label>

//           <input
//             type="text"
//             id="username"
//             {...register("username", {
//               required: "Username is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9\s]*$/,
//                 message: "Name shouldn't be empty",
//               },
//             })}
//             // defaultValue=""
//           />

//           <p className="error-msg">{errors.username?.message}</p>

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             {...register("email", {
//               required: "Email is required",
//               validate: (email) =>
//                 isEmailValid(email) ||
//                 "this emial are not registered in our client list sorry",
//             })}
//           />
//           <p className="error-msg">{errors.email?.message}</p>

//           <label htmlFor="events">Event:</label>
//           <input
//             type="text"
//             id="events"
//             {...register("events", {
//               required: "Event is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9 ]*$/,
//                 message: "i.e : criket, football, gulf",
//               },
//             })}
//           />
//           <p className="error-msg">{errors.events?.message}</p>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             {...register("password", {
//               required: "Password is required",
//               pattern: {
//                 value: /^(?=.*)(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/,
//                 message:
//                   "Password must be 8-20 characters and include special characters, numbers, and capital letters.",
//               },
//             })}
//           />

//           <p className="error-msg">{errors.password?.message}</p>

//           <button type="submit">Submit</button>
//         </form>
//         <DevTool control={control} />
//       </div>
//     </>
//   );
// }

// export default Form;














//inside form i add a div section which include the following changes :
// Gender label , Thank You message after bieng form submitted and also some other litle changes commit. 



/*

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "khanjanmama",
    },
  });
  const { errors } = formState;
  const [showThankYou, setShowThankYou] = useState(false);

  const isEmailValid = (email) => {
    const allowedEmails = [
      "omairyahya55@gmail.com",
      "omairyahya94@gmail.com",
      "adminomair@gmail.com",
      "admin55@gmail.com",
    ];

    return allowedEmails.includes(email);
  };

  const onSubmit = (DATA) => {
    console.log("Form Submitted successfully", DATA);
    setShowThankYou(true);
  };

  renderCount++;
  return (
    <>
      <div>
        <h2>Omair's_Foundation {renderCount / 2}</h2>
        {showThankYou ? (
          <h3>
            Thanks <br /> Your Form has been submitted <br />
          </h3>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} validate>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9\s]*$/,
                  message: "Name shouldn't be empty",
                },
              })}
            />
            <p className="error-msg">{errors.username?.message}</p>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                validate: (email) =>
                  isEmailValid(email) ||
                  "This email is not registered in our client list, sorry",
              })}
            />
            <p className="error-msg">{errors.email?.message}</p>

            <label htmlFor="events">Event:</label>
            <input
              type="text"
              id="events"
              {...register("events", {
                required: "Event is required",
                pattern: {
                  value: /^[a-zA-Z0-9 ]*$/,
                  message: "i.e: cricket, football, gulf",
                },
              })}
            />
            <p className="error-msg">{errors.events?.message}</p>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*)(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/,
                  message:
                    "Password must be 8-20 characters and include special characters, numbers, and capital letters.",
                },
              })}
            />
            <p className="error-msg">{errors.password?.message}</p>

            <div className="form-control">
              <label htmlFor="gender">Gender:</label>
              <select
                className="styled-select"
                {...register("gender")}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
        <DevTool control={control} />
      </div>
    </>
  );
}

export default Form;

*/
