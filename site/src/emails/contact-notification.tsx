import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";
import type { ContactFormData } from "@/lib/schemas/contact";
import {
  sujetLabels,
  budgetLabels,
  delaiLabels,
  sourceLabels,
} from "@/lib/schemas/contact";

export function ContactNotificationEmail(props: ContactFormData) {
  const {
    nom,
    email,
    societe,
    sujet,
    message,
    telephone,
    budget,
    delai,
    source,
  } = props;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle demande de contact</Heading>

          <Section style={section}>
            <Text style={label}>Nom</Text>
            <Text style={value}>{nom}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Société</Text>
            <Text style={value}>{societe}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Sujet</Text>
            <Text style={value}>{sujetLabels[sujet]}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          {telephone && (
            <Section style={section}>
              <Text style={label}>Téléphone</Text>
              <Text style={value}>{telephone}</Text>
            </Section>
          )}

          {budget && budget in budgetLabels && (
            <Section style={section}>
              <Text style={label}>Budget estimé</Text>
              <Text style={value}>{budgetLabels[budget as keyof typeof budgetLabels]}</Text>
            </Section>
          )}

          {delai && delai in delaiLabels && (
            <Section style={section}>
              <Text style={label}>Délai souhaité</Text>
              <Text style={value}>{delaiLabels[delai as keyof typeof delaiLabels]}</Text>
            </Section>
          )}

          {source && source in sourceLabels && (
            <Section style={section}>
              <Text style={label}>Source</Text>
              <Text style={value}>{sourceLabels[source as keyof typeof sourceLabels]}</Text>
            </Section>
          )}

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Pour répondre, utilisez{" "}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
            <Text style={footerText}>
              Reçu le {new Date().toLocaleString("fr-FR")}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
  borderRadius: "8px",
};

const h1 = {
  color: "#1e3a5f",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  margin: "0 0 32px",
  padding: "0 32px",
};

const section = {
  padding: "0 32px",
  marginBottom: "16px",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px",
};

const value = {
  color: "#1f2937",
  fontSize: "16px",
  margin: "0 0 0 0",
  lineHeight: "24px",
};

const messageText = {
  ...value,
  whiteSpace: "pre-wrap" as const,
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
};

const link = {
  color: "#4a7bb7",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const footer = {
  padding: "0 32px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 8px",
  lineHeight: "20px",
};
