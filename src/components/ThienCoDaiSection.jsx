import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay: i * 0.12, ease: "easeOut" },
  }),
};

/* ─────────────────────────────────────────────
   SHARED SUB-COMPONENTS
───────────────────────────────────────────── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-14 opacity-25">
      <div className="h-px w-20 bg-amber-300" />
      <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
      <div className="h-px w-20 bg-amber-300" />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      className="text-center text-amber-400/60 tracking-[0.28em] uppercase mb-3"
      style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem" }}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   PILLAR CARD — Section II
───────────────────────────────────────────── */
function PillarCard({ icon, title, content, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative rounded-2xl p-7 transition-all duration-700
                 hover:border-violet-400/30 hover:bg-white/8"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="text-3xl mb-4 select-none">{icon}</div>
      <h3
        className="text-violet-200 mb-3 font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
      >
        {title}
      </h3>
      <p
        className="text-white/65 leading-relaxed"
        style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
      >
        {content}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STEP ITEM — Section III
───────────────────────────────────────────── */
function StepItem({ number, title, desc, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex gap-5 items-start"
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center
                   justify-center text-amber-300 font-semibold text-sm"
        style={{ border: "1px solid rgba(251,191,36,0.3)" }}
      >
        {number}
      </div>
      <div>
        <h4
          className="text-amber-100 font-semibold mb-1.5"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
        >
          {title}
        </h4>
        <p
          className="text-white/60 leading-relaxed"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Q&A ITEM — Section IV (Expandable)
───────────────────────────────────────────── */
function QAItem({ question, answer, delay }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5
                   text-left transition-colors duration-300 hover:bg-white/5"
      >
        <span
          className="text-white/85 font-medium leading-snug"
          style={{ fontFamily: "var(--font-serif)", fontSize: "0.97rem" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center
                     justify-center text-amber-400/70 text-lg font-thin"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="qa-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-7 pb-7 pt-2"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   VERSE BLOCK — Section V
───────────────────────────────────────────── */
function KePage({ lines, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="rounded-3xl p-10 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(61,31,107,0.25) 0%, rgba(10,10,26,0.4) 100%)",
        border: "1px solid rgba(139,92,246,0.18)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Subtle glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <p
          className="text-amber-400/40 tracking-[0.3em] uppercase text-xs mb-8"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Bài Kệ · Minh Sư Ruma
        </p>

        <div className="space-y-3">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              custom={i * 0.5}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-white/55 italic leading-relaxed"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div
          className="mt-8 h-px mx-auto w-16 opacity-20"
          style={{ background: "rgba(251,191,36,1)" }}
        />
        <p
          className="mt-4 text-amber-400/40 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          — Cốt Lõi Bình An —
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ThienCoDaiSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  /* ── DATA ── */

  const pillars = [
    {
      icon: "✦",
      title: "Không Phải Tôn Giáo — Kỹ Thuật Đánh Thức",
      content:
        "Pháp môn Diệu Âm không phải giáo điều hay tín ngưỡng, mà là kỹ thuật đánh thức vị Minh sư bên trong thông qua sự rung động của Suối nguồn Âm thanh và hào quang Ánh sáng trực tiếp từ Thượng đế — giúp linh hồn vượt thoát sự kìm hãm của luật nhân quả.",
    },
    {
      icon: "⚜️",
      title: "Mạch Truyền Thừa Từ Thiên Đàng",
      content:
        "Pháp môn này không có nguồn gốc từ nhân gian mà từ Thiên đàng, Niết bàn. Từ Đức Phật Thích Ca Mâu Ni nơi dãy Hy Mã Lạp Sơn đến tổ Bồ Đề Đạt Ma tại Trung Hoa — tất cả đều dùng Dòng Âm lưu để cứu độ những linh hồn hữu duyên.",
    },
    {
      icon: "🔑",
      title: "Sức Mạnh Của Tâm Ấn — Vô Ngôn",
      content:
        "Sự chuyển hóa bắt đầu bằng hành động Vô Ngôn. Minh sư dùng lực lượng để chọc lủng màn vô minh, mồi ngọn đuốc trí huệ đang tắt trong linh hồn học trò. Không có Minh sư tại thế cầm chìa khóa — hành giả mãi chỉ mò mẫm trong bóng tối phàm phu.",
    },
    {
      icon: "🌊",
      title: "Thần Thông Vô Ngã — Vượt Tam Giới",
      content:
        "Dòng Âm lưu như dòng nước Cam lồ, len lỏi vào từng ngóc ngách của tâm thức để gội rửa nghiệp chướng. Lực lượng hóa giải cao thượng nhất — giúp linh hồn thăng hoa vượt qua ba cõi (Tam giới) để trở về bản thể thuần khiết.",
    },
  ];

  const steps = [
    {
      number: "I",
      title: "Trường Chay & Ngũ Giới",
      desc: "Để giữ cho nhục thể tinh khiết, hành giả bắt buộc phải ăn chay trường và giữ gìn ngũ giới. Đây là hàng rào bảo vệ, giúp tâm trí tránh khỏi sự xáo trộn của nghiệp sát và sự cám dỗ trần tục.",
    },
    {
      number: "II",
      title: "Tập Trung Mắt Trí Huệ",
      desc: "Khi ngồi thiền, thả lỏng cơ thể tự nhiên và đặt sự tập trung vào điểm giữa hai chân mày — cửa ngõ duy nhất dẫn vào thế giới nội tại. Tuyệt đối không dùng nội công hay nỗ lực gượng ép, mà để mọi việc diễn ra theo ân điển của Minh sư.",
    },
    {
      number: "III",
      title: "Mặc Niệm Năm Hồng Danh",
      desc: "Năm danh hiệu thiêng liêng được trao lúc truyền Tâm ấn chính là bảo bối. Hành giả cần mặc niệm thầm trong tâm suốt 24 giờ — dù đi, đứng, nằm hay ngồi. Lực lượng này tạo ra hào quang bảo vệ, khiến ma vương và nghiệp lực không dám đụng chạm.",
    },
    {
      number: "IV",
      title: "Sống Đời Khẳng Định",
      desc: "Thiền định không chỉ là ngồi yên, mà là mang sự sáng suốt vào đời sống. Hành giả học cách mỉm cười, khiêm nhường và tha thứ. Khi nội tâm vắng lặng như mặt hồ, trí huệ sẽ tự tuôn chảy, giúp giải quyết mọi rắc rối đời thường một cách dứt khoát và thông suốt.",
    },
  ];

  const qaItems = [
    {
      question:
        "Thiền định có phải thuộc về một tôn giáo cụ thể? Đức Chúa và các vị thầy khác có thiền không?",
      answer:
        "\"Ngài là Minh sư, Ngài là bậc khai ngộ thì Ngài không dùng ngôn ngữ con người mà Ngài để giảng dạy đâu. Suốt đời của Ngài là Ngài thiền định. Ngài thiền định Ngài mới kết nối được với Thượng đế chứ. Ngôn ngữ con người đôi khi dùng những cái chữ được gọi là 'cầu nguyện'. Cầu nguyện chính là thiền định đó. Nếu cầu nguyện mà quý vị không tập trung, quý vị không có sự định lực thì lời cầu nguyện của quý vị cũng vô dụng mà thôi.\"\n— Minh sư Ruma",
    },
    {
      question: "Dòng Âm Lưu Thượng Đế là gì? Tôi có thể tự tiếp cận không?",
      answer:
        "Dòng Âm Lưu là chấn động lực của vũ trụ — là Âm thanh và Ánh sáng nội tại không giống bất kỳ điều gì con người diễn đạt bằng đầu óc phàm phu hay kinh điển chữ nghĩa. Đây là sự hiểu biết bằng Trí Huệ thâm sâu bên trong. Không thể tự tiếp cận nếu không có Minh sư tại thế truyền Tâm ấn — đó là lý do pháp môn này cần \"chìa khóa\" thiêng liêng.",
    },
    {
      question: "Thiền định mang lại lợi ích gì trong cuộc sống hàng ngày?",
      answer:
        "\"Thiền định là món ăn tinh hoa của trí huệ... Cuộc sống trong thiền định mới là sự trường sinh bất lão. Hãy tự nhủ đời người nhân gian có ai sống được là bao, ráng thiền mãi nghe con cho đời lạc quan tự tánh.\"\n— Minh sư Ruma\n\nKhi nội tâm được nạp đầy bởi Dòng Âm Lưu, mọi lo âu, bệnh tật tâm lý, nghiệp chướng dần dần được tẩy rửa. Trí huệ tự tuôn chảy, cuộc sống trở nên thông suốt và an lạc thực sự.",
    },
    {
      question: "Pháp thiền này và các pháp môn khác khác nhau ở điểm gì?",
      answer:
        "\"Pháp Môn âm thanh ánh sáng nội tại hay dòng âm lưu thượng đế là một pháp môn giúp chúng ta trực tiếp thấu ngộ bên trong mình thông qua lực lượng dòng âm Lưu Thượng đế còn gọi là một sự hiểu biết bằng Trí Huệ hay sự chứng ngộ.\"\n— Minh sư Ruma\n\nKhác với các pháp môn dựa trên tư duy phàm phu hay nghi lễ bên ngoài, pháp thiền Diệu Âm là sự chứng ngộ trực tiếp — không qua trung gian ngôn ngữ, không qua sách vở kinh điển, mà qua ánh sáng và âm thanh bên trong chính mình.",
    },
  ];

  const keLines = [
    "tham thiền nhập định giữa nhân gian",
    "con sẽ Gành bến bờ Giải Thoát",
    "đi sâu thiền định âm Lưu Thượng đế",
    "sẽ phá tan U Minh tăm tối",
    "",
    "ngồi thiền dưới tâm thanh tịnh",
    "nhập sau cốt lõi bình an",
    "Quan Âm nhẹ nhàng con sẽ cảm nhận",
    "âm Lưu Thượng đế cứ đến hoài",
    "",
    "đời người sống được là bao",
    "hãy tham thiền nhập định",
    "cuộc sống trong thiền định",
    "mới là sự trường sinh...",
    "",
    "thiền mênh mang bồng bềnh",
    "âm Lưu Thượng đế Ruma...",
  ];

  /* ─── RENDER ─── */
  return (
    <section
      id="phap-thien-co-dai"
      className="relative min-h-screen py-28 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070712 0%, #0d0d22 45%, #070712 100%)",
      }}
    >
      {/* ── Background Orbs ── */}
      <div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute top-3/4 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ══════════════════════════════════════════
            SECTION I — HERO
        ══════════════════════════════════════════ */}
        <motion.div
          ref={heroRef}
          variants={fadeUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-amber-400/60 tracking-[0.32em] uppercase text-xs mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Pháp Môn Của Linh Hồn
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Pháp Thiền Cổ Đại
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
              }}
            >
              Pháp Môn Diệu Âm
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
          >
            Âm Thanh và Ánh Sáng Nội Tại — một pháp môn cổ đại vốn tồn tại
            từ khi càn khôn vũ trụ được tạo thành, giúp linh hồn trực tiếp
            thấu ngộ bản thể thuần khiết của mình.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3 mt-10 opacity-30"
          >
            <div className="h-px w-12 bg-violet-400" />
            <div className="w-1 h-1 rounded-full bg-violet-400" />
            <div className="h-px w-12 bg-violet-400" />
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            SECTION II — 4 KHÁI NIỆM CỐT LÕI
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionLabel>Chiều Sâu Nhận Thức</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/88 mb-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.95rem)",
              fontWeight: 300,
            }}
          >
            Bốn Tầng Hiểu Biết Về Pháp Môn Diệu Âm
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <PillarCard key={i} {...p} delay={i} />
            ))}
          </div>
        </div>

        {/* Quote Block — Minh sư */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 px-8 py-9 rounded-3xl relative overflow-hidden"
          style={{
            background: "rgba(109,40,217,0.08)",
            border: "1px solid rgba(139,92,246,0.16)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
            style={{ background: "linear-gradient(180deg, #c084fc 0%, #7c3aed 100%)" }}
          />
          <p
            className="text-white/75 leading-relaxed italic text-center"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}
          >
            "Minh sư là trí huệ bên trong của mình đó, ta là trí huệ bên trong
            của quý vị, là một ánh sáng soi đường dẫn lối cho quý vị đi về thế
            giới giải thoát bình an và phúc lạc này đây."
          </p>
          <p
            className="text-center mt-5 text-violet-400/50 text-xs tracking-widest"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            — Minh Sư Ruma · Khai Thị —
          </p>
        </motion.div>

        <SectionDivider />

        {/* ══════════════════════════════════════════
            SECTION III — HƯỚNG DẪN THỰC HÀNH
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionLabel>Con Đường Thực Hành</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/88 mb-12"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.95rem)",
              fontWeight: 300,
            }}
          >
            Bốn Nền Tảng Của Hành Giả
          </motion.h2>

          <div className="space-y-9">
            {steps.map((s, i) => (
              <StepItem key={i} {...s} delay={i} />
            ))}
          </div>
        </div>

        {/* Pháp Thoại Trích Dẫn */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <p
            className="text-amber-400/50 tracking-[0.25em] uppercase text-xs mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Pháp Thoại · Minh Sư Ruma
          </p>
          <p
            className="text-white/60 leading-loose"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
          >
            "Pháp Môn âm thanh ánh sáng nội tại hay dòng âm lưu thượng đế là
            một pháp môn giúp chúng ta trực tiếp thấu ngộ bên trong mình thông
            qua lực lượng dòng âm Lưu Thượng đế còn gọi là một sự hiểu biết
            bằng Trí Huệ hay sự chứng ngộ. Pháp Môn này là một lực lượng âm
            lưu giúp tẩy rựa nghiệp chướng dẫn dắt chúng ta đi về thế giới
            giải thoát. Âm thanh ánh sáng nội tại này không giống như những gì
            con người chúng ta thường diễn đạt để hiểu biết một cách đơn
            thuần bằng đầu óc con người với những gì ghi trong sách vở kinh
            điển — mà nó là sự hiểu biết bằng Trí Huệ thâm sâu bên trong để
            chúng ta nhận thức được rằng đó là một lực lượng tẩy rửa linh hồn
            mọi chúng sanh."
          </p>
        </motion.div>

        <SectionDivider />

        {/* ══════════════════════════════════════════
            SECTION IV — Q&A KHAI THỊ
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionLabel>Vấn Đáp Khai Thị</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/88 mb-3"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.95rem)",
              fontWeight: 300,
            }}
          >
            Những Câu Hỏi Thường Gặp
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white/38 mb-10"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.87rem" }}
          >
            Lời khai thị trực tiếp từ Minh sư Ruma
          </motion.p>

          <div className="space-y-3">
            {qaItems.map((item, i) => (
              <QAItem key={i} {...item} delay={i} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ══════════════════════════════════════════
            SECTION V — BÀI KỆ "CỐT LÕI BÌNH AN"
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionLabel>Thi Kệ</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/88 mb-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.95rem)",
              fontWeight: 300,
            }}
          >
            Cốt Lõi Bình An
          </motion.h2>
          <KePage lines={keLines} delay={0} />
        </div>

        {/* ══════════════════════════════════════════
            SECTION VI — CLOSING VERSE
        ══════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mt-16 pb-4"
        >
          <div className="inline-block max-w-xl mx-auto">
            <p
              className="text-white/35 italic leading-loose"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              }}
            >
              "Thiền định là món ăn tinh hoa của trí huệ.
              <br />
              Cuộc sống trong thiền định mới là sự trường sinh bất lão.
              <br />
              Hãy tự nhủ đời người nhân gian có ai sống được là bao,
              <br />
              ráng thiền mãi nghe con cho đời lạc quan tự tánh."
            </p>
            <p
              className="mt-6 text-amber-400/40 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              — Tinh hoa Trí Huệ · Guruji Ruma —
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
