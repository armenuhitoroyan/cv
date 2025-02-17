import React, { useState } from "react";
import styles from "../../style/Blog.module.css";
import { Errors, FormData } from "../../interfaces/Types";

// Blog Details էջի բաժանորդագրությունը՝ Email-ի միջոցով

const EnterEmail: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  // տվյալների վալիդացիա
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className={`${styles.card} mt-4`}>
      <h2 className={styles.cardTitle}>Subscribe Newsletter</h2>
      <div className={styles.divider}></div>
      <p
        style={{ color: "black", marginBottom: "15px" }}
        className="text-gray-500 mt-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <span>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </span>
      </form>

      <div className="mt-4">
        <button
          className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition"
          onClick={handleSubmit}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default EnterEmail;
