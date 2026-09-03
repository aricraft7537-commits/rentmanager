export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0f19",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "60px" }}>🏠</div>

        <h1 style={{
          fontSize: "42px",
          margin: "10px 0"
        }}>
          RentManager
        </h1>

        <p style={{
          color: "#9ca3af",
          fontSize: "17px",
          lineHeight: "1.6"
        }}>
          Gérez vos logements, vos locataires et vos loyers
          simplement depuis votre téléphone.
        </p>

        <button style={{
          width: "100%",
          padding: "16px",
          marginTop: "25px",
          borderRadius: "12px",
          border: "none",
          background: "white",
          color: "#0b0f19",
          fontSize: "16px",
          fontWeight: "bold"
        }}>
          Se connecter
        </button>

        <button style={{
          width: "100%",
          padding: "16px",
          marginTop: "12px",
          borderRadius: "12px",
          border: "1px solid #374151",
          background: "transparent",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold"
        }}>
          Créer un compte
        </button>
      </div>
    </main>
  );
}