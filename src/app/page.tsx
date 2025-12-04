"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroMetrics from '@/components/sections/hero/HeroMetrics';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { CheckCircle, Leaf, Sprout } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="minimal"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887630796-2f9ukniy.jpg"
          logoAlt="Carson Loquaci Farm"
          brandName="Carson Loquaci"
          button={{
            text: "Get Started",
            href: "#contact"
          }}
          buttonClassName="px-6 py-3"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroMetrics
          title="Premium Organic Farming at Its Finest"
          description="Experience the finest quality produce from Carson Loquaci's sustainably managed farm. Decades of expertise in organic agriculture delivering nature's best to your table."
          tag="Certified Organic • Family Owned"
          tagIcon={Leaf}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          metricsLabel="Trusted by families and businesses for premium quality"
          metrics={[
            { id: "1", value: "50+", label: "Years of Experience" },
            { id: "2", value: "10,000+", label: "Happy Customers" },
            { id: "3", value: "100%", label: "Organic Certified" }
          ]}
          ariaLabel="Carson Loquaci Farm Hero Section"
          className="relative min-h-screen"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl max-w-2xl"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="A legacy of quality, sustainability, and passion for excellence in every harvest. From our family to yours, cultivating the finest organic produce with care and dedication."
          buttons={[
            { text: "Discover Our Story", href: "#contact" }
          ]}
          useInvertedBackground="invertDefault"
          ariaLabel="About Carson Loquaci Farm"
          titleClassName="text-3xl md:text-5xl leading-tight"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Premium Organic Vegetables",
              price: "$12/lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887631931-3h7ixg3t.jpg",
              imageAlt: "Fresh organic vegetables collection"
            },
            {
              id: "2",
              name: "Seasonal Harvest Select",
              price: "$15/lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887632681-mi7bdfil.jpg",
              imageAlt: "Seasonal organic produce harvest"
            },
            {
              id: "3",
              name: "Heritage Seed Collection",
              price: "$18/lb",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887633367-2dsga8fl.jpg",
              imageAlt: "Heritage variety organic crops"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          carouselMode="buttons"
          title="Our Premium Products"
          description="Handpicked selections of the finest organic produce, grown with care and harvested at peak freshness"
          tag="Fresh Daily"
          tagIcon={Sprout}
          buttons={[
            { text: "View All Products", href: "#contact" }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Featured Products Section"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Services"
          description="Comprehensive farm solutions designed for families and businesses seeking premium quality and sustainability"
          tag="Quality Assurance"
          tagIcon={CheckCircle}
          features={[
            {
              id: 1,
              title: "Direct Farm Delivery",
              description: "Fresh produce delivered to your door within 24 hours of harvest, maintaining peak nutritional value",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887635517-ls2jdt8g.jpg"
            },
            {
              id: 2,
              title: "Organic Certification",
              description: "100% certified organic farming practices meeting international standards for health and sustainability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887634821-53btohmy.jpg"
            },
            {
              id: 3,
              title: "Farm Tours & Education",
              description: "Experience sustainable agriculture firsthand with guided tours and educational workshops for families",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887634321-g8e5f7in.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Services Section"
          buttons={[
            { text: "Schedule a Tour", href: "#contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Carson Loquaci's farm delivers exceptional quality that you simply cannot find elsewhere. Every product arrives fresh and packed with genuine care. We've been customers for years and wouldn't shop anywhere else."
          rating={5}
          author="Sarah Mitchell, Family of Four"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887636156-tgm4impj.jpg",
              alt: "Customer 1"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887636680-t0n5a7ag.jpg",
              alt: "Customer 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887637422-j5nt4mdk.jpg",
              alt: "Customer 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887637938-x1387jzg.jpg",
              alt: "Customer 4"
            }
          ]}
          useInvertedBackground="invertCard"
          ariaLabel="Customer Testimonial"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to experience premium organic produce?"
          animationType="entrance-slide"
          inputPlaceholder="Enter your email"
          buttonText="Get Exclusive Access"
          useInvertedBackground="noInvert"
          ariaLabel="Contact Section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764887631368-h54z34wf.jpg"
          imageAlt="Carson Loquaci Farm landscape"
          logoText="Carson Loquaci Farm"
          copyrightText="© 2025 Carson Loquaci Farm. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Fresh Produce", href: "#products" },
                { label: "Seasonal Select", href: "#products" },
                { label: "Bulk Orders", href: "#contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Farm Delivery", href: "#services" },
                { label: "Farm Tours", href: "#services" },
                { label: "Education Programs", href: "#services" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Newsletter", href: "#contact" },
                { label: "Social Media", href: "#contact" }
              ]
            }
          ]}
          ariaLabel="Site Footer"
        />
      </div>
    </ThemeProvider>
  );
}