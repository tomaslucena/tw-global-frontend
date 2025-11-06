"use client";

import { useState } from "react";
import ContentWrapper from "@/app/_components/ContentWrapper/ContentWrapper";
import Button from "@/app/_components/Button/Button";
import styles from "./form.module.scss";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  liquidCapital: string;
  location: string;
  motivation: string;
  referralSource: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function FranchiseApplicationPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    liquidCapital: "",
    location: "",
    motivation: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[\d\s\-\(\)]{8,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Liquid capital validation
    if (!formData.liquidCapital.trim()) {
      newErrors.liquidCapital = "Liquid capital information is required";
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Preferred location is required";
    }

    // Motivation validation
    if (!formData.motivation.trim()) {
      newErrors.motivation = "Please tell us why you want to open a franchise";
    } else if (formData.motivation.trim().length < 20) {
      newErrors.motivation = "Please provide a more detailed explanation (at least 20 characters)";
    }

    // Referral source validation
    if (!formData.referralSource.trim()) {
      newErrors.referralSource = "Please tell us how you heard about us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to actual API
      const response = await fetch('/franchises/apply/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          liquid_capital: formData.liquidCapital,
          preferred_location: formData.location,
          motivation: formData.motivation,
          referral_source: formData.referralSource,
          submitted_at: new Date().toISOString()
        })
      })
      
      console.log("Application submitted successfully:", response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('Unauthorized')) {
          alert("Authentication error. Please contact support.");
        } else if (error.message.includes('HTTP error')) {
          alert("Server error. Please try again later or contact support.");
        } else {
          alert("There was an error submitting your application. Please try again.");
        }
      } else {
        alert("There was an error submitting your application. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ContentWrapper>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h1>Thank You!</h1>
          <p>Your franchise application has been successfully submitted.</p>
          <p>Our team will review your application and get back to you within 3-5 business days.</p>
          <Button href="/franchises" size="md">
            Back to Franchises
          </Button>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1>Join the Twist & Buckle Family</h1>
          <p>Take the first step towards owning your own Twist & Buckle franchise. Fill out the application below and our team will be in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? styles.error : ""}
              />
              {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? styles.error : ""}
              />
              {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? styles.error : ""}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? styles.error : ""}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="country">Country *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={errors.country ? styles.error : ""}
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="SG">Singapore</option>
                <option value="PH">Philippines</option>
                <option value="MY">Malaysia</option>
                <option value="TH">Thailand</option>
                <option value="VN">Vietnam</option>
                <option value="ID">Indonesia</option>
                <option value="other">Other</option>
              </select>
              {errors.country && <span className={styles.errorMessage}>{errors.country}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="liquidCapital">Liquid Capital *</label>
              <select
                id="liquidCapital"
                name="liquidCapital"
                value={formData.liquidCapital}
                onChange={handleInputChange}
                className={errors.liquidCapital ? styles.error : ""}
              >
                <option value="">Select your liquid capital range</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k-1m">$500,000 - $1,000,000</option>
                <option value="1m+">$1,000,000+</option>
              </select>
              {errors.liquidCapital && <span className={styles.errorMessage}>{errors.liquidCapital}</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location">Where would you like to open a Twist & Buckle Franchise? *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="City, State/Province, Country"
              className={errors.location ? styles.error : ""}
            />
            {errors.location && <span className={styles.errorMessage}>{errors.location}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="motivation">Why do you want to open a Twist & Buckle Franchise? *</label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us about your entrepreneurial goals and why Twist & Buckle appeals to you..."
              className={errors.motivation ? styles.error : ""}
            />
            {errors.motivation && <span className={styles.errorMessage}>{errors.motivation}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="referralSource">How did you hear about us? *</label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              className={errors.referralSource ? styles.error : ""}
            >
              <option value="">Select an option</option>
              <option value="website">Website</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral from friend/family</option>
              <option value="franchise-broker">Franchise Broker</option>
              <option value="trade-show">Trade Show</option>
              <option value="search-engine">Search Engine</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
            {errors.referralSource && <span className={styles.errorMessage}>{errors.referralSource}</span>}
          </div>

          <div className={styles.submitSection}>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
}
