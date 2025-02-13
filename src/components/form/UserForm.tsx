import React, { useState } from "react";
import styles from "../../style/Contact.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  department?: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div className={`flex flex-col gap-5 lg:flex-row `}>
        <div className={`${styles.contacts}`}>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div className={`${styles.contacts}`}>
          <input
            type="text"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="department"
          placeholder="Department *"
          value={formData.department}
          onChange={handleChange}
        />

        {errors.department && (
          <span style={{ color: "red" }}>{errors.department}</span>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.button}`}>
        <button
          type="submit"
          className="!bg-purple-500 !text-white !font-bold !py-5 !px-10 !rounded-full !mb-10"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default UserForm;
