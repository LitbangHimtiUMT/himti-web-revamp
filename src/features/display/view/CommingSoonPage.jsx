import { StatusDisplay } from "../../global/components/StatusDisplay";
import comingSoonAnimation from "../../../core/assets/lottie-.json";

export default function DivisiPage() {
  return (
    <StatusDisplay
      animationData={comingSoonAnimation}
      title="Segera Hadir!"
      message="Halaman ini sedang dalam tahap pengembangan. Kami bekerja keras untuk memberikan konten terbaik untuk Anda."
    />
  );
}
