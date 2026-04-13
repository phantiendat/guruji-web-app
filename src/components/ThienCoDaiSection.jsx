import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ─────────────────────────────────────────────
   SHARED SUB-COMPONENTS
───────────────────────────────────────────── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-16 opacity-20">
      <div className="h-px w-20 bg-violet-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
      <div className="h-px w-20 bg-violet-400" />
    </div>
  );
}

function Overline({ children }) {
  return (
    <p
      className="text-center text-violet-400/55 tracking-[0.3em] uppercase mb-4"
      style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="text-center text-white/88 mb-10"
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.45rem, 3vw, 2rem)",
        fontWeight: 300,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </motion.h2>
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
      className="rounded-2xl p-7 transition-all duration-700 hover:bg-white/6"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(139,92,246,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="text-2xl mb-4 select-none opacity-80">{icon}</div>
      <h3
        className="text-violet-200 mb-3 font-semibold leading-snug"
        style={{ fontFamily: "var(--font-serif)", fontSize: "1.03rem" }}
      >
        {title}
      </h3>
      <p
        className="text-white/60 leading-relaxed"
        style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}
      >
        {content}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STEP ITEM — Section III
───────────────────────────────────────────── */
function StepItem({ roman, title, desc, delay }) {
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
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center
                   text-violet-300 font-semibold text-xs tracking-wider"
        style={{ border: "1px solid rgba(139,92,246,0.28)" }}
      >
        {roman}
      </div>
      <div className="pt-1">
        <h4
          className="text-amber-100/90 font-semibold mb-2"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
        >
          {title}
        </h4>
        <p
          className="text-white/58 leading-relaxed"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Q&A ACCORDION — Section V
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
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(139,92,246,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-7 py-6
                   text-left transition-colors duration-300 hover:bg-white/4"
      >
        <span
          className="text-white/82 font-medium leading-snug"
          style={{ fontFamily: "var(--font-serif)", fontSize: "0.97rem" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center
                     text-violet-400/60 text-xl font-thin leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-7 pb-7 pt-3"
              style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
            >
              <p
                className="text-white/55 leading-loose whitespace-pre-line"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}
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
   BÀI KỆ BLOCK — Section VI
───────────────────────────────────────────── */
function BaiKe({ title, lines }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="rounded-3xl py-12 px-8 md:px-14 relative overflow-hidden text-center"
      style={{
        background:
          "linear-gradient(160deg, rgba(61,31,107,0.22) 0%, rgba(10,10,26,0.45) 100%)",
        border: "1px solid rgba(139,92,246,0.15)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 35% at 50% 0%, rgba(139,92,246,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <p
          className="text-violet-400/40 tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
        >
          {title}
        </p>

        <div className="space-y-2 max-w-2xl mx-auto">
          {lines.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-3" />
            ) : (
              <motion.p
                key={i}
                custom={i * 0.4}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-white/50 italic leading-relaxed"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(0.88rem, 1.8vw, 0.98rem)",
                }}
              >
                {line}
              </motion.p>
            )
          )}
        </div>

        <div
          className="mt-10 h-px w-12 mx-auto opacity-20"
          style={{ background: "rgba(139,92,246,1)" }}
        />
        <p
          className="mt-4 text-violet-400/35 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          — Minh Sư Guruji Ruma —
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

  /* ══ DATA (template literals — no escape issues) ══ */

  const pillars = [
    {
      icon: "⚜️",
      title: "Mạch Truyền Thừa Vô Tiền Khoáng Hậu",
      content: `Pháp môn này không có nguồn gốc từ trí năng con người mà bắt nguồn từ Thiên đàng và Niết bàn. Suốt hàng ngàn năm, các bậc Minh sư Toàn Giác đã âm thầm mang ánh sáng này xuống cõi Ta bà để dẫn dắt những linh hồn đủ duyên trở về nguồn cội vĩnh hằng.`,
    },
    {
      icon: "🔑",
      title: "Sức Mạnh Của Tâm Ấn — Mồi Đuốc Trí Huệ",
      content: `Sự chuyển hóa thực sự bắt đầu khi hành giả được Minh sư tại thế mồi đuốc Trí Huệ thông qua lễ truyền Tâm Ấn. Đây là hành động vô ngôn, dùng lực lượng thiêng liêng để chọc lủng màn vô minh dày đặc, đánh thức vị Chủ nhân đang ngủ say bên trong mỗi chúng sanh.`,
    },
    {
      icon: "🌊",
      title: "Dòng Âm Lưu — Suối Nguồn Cam Lộ",
      content: `Khi thiền định, hành giả không dùng ngôn ngữ hay tư duy mà lắng nghe dòng Âm lưu Thượng đế. Lực lượng này như dòng nước trong lành len lỏi vào tâm thức, xua tan bóng tối phủ định, đốt cháy nghiệp lực và hồi phục lực lượng vạn năng vốn có của linh hồn.`,
    },
    {
      icon: "✦",
      title: "Từ Phủ Định Sang Khẳng Định",
      content: `Pháp thiền giúp hành giả làm chủ bản thân, không còn bị cuốn theo những tạp niệm hay sự quyến rũ của thế giới vật chất. Từ đó, mỗi lời nói trở thành lời khẳng định phúc lạc, mỗi cử chỉ là biểu hiện của tình yêu thương vô ngã và lòng khiêm nhường sâu thẳm.`,
    },
  ];

  const steps = [
    {
      roman: "I",
      title: "Trường Chay Tinh Khiết",
      desc: `Là nền tảng để bảo tồn nhục thể thanh tịnh và trưởng dưỡng lòng từ bi. Ăn chay không phải là sự chịu khổ, mà là cách để linh hồn nhẹ nhàng hơn, dễ dàng câu thông với lực lượng thiêng liêng của vũ trụ.`,
    },
    {
      roman: "II",
      title: "Tọa Thiền Mỗi Ngày",
      desc: `Dành ít nhất 2.5 tiếng để quay vào bên trong, tập trung vào Mắt Trí Huệ — điểm giữa hai chân mày. Thiền định là món ăn tinh thần tối quan trọng để nuôi dưỡng sự sáng suốt, giúp hành giả đối mặt với nghịch cảnh bằng tâm thế bình thản và tự tại.`,
    },
    {
      roman: "III",
      title: "Mặc Niệm Năm Hồng Danh",
      desc: `Năm danh hiệu thiêng liêng được Minh sư ban cho chính là bảo bối hộ thân 24/24 giờ. Dù đi, đứng, nằm hay ngồi, việc mặc niệm thầm trong tâm giúp tạo ra hào quang bảo vệ, đẩy lùi ma vương và các lực lượng phủ định xung quanh.`,
    },
    {
      roman: "IV",
      title: "Sống Đời Phục Vụ & Khiêm Nhường",
      desc: `Áp dụng thiền định vào mọi công việc hàng ngày — làm việc với sự tập trung cao độ cũng chính là thiền. Khi con người biết khiêm nhường, họ sẽ mở ra cánh cửa của Trí Huệ và đón nhận được muôn vàn ân điển từ Thượng đế.`,
    },
  ];

  const qaItems = [
    {
      question: `Ngày con được thọ Tâm Ấn là ngày được mở cánh cửa giác ngộ, hay là ngày được trả lại quả vị Phật? Nếu đã là Phật thì tại sao còn cần nỗ lực tu hành?`,
      answer: `Minh sư khai thị: Quý vị là một vị Phật — nhưng Phật còn đang ngủ, Phật còn mê, Phật sống vô minh, Phật chưa nhận thức được. Quý vị cần một người đánh thức mình, cần Minh sư mài dũa mỗi ngày.

Cũng giống như tượng Phật để đó ngàn năm — tượng đó đóng đầy rêu rong rồi. Tượng Phật cũng vẫn là tượng Phật, nhưng cũng phải mài dũa chứ. Quý vị bắt buộc phải tự rèn luyện mình, cần Minh sư chạm để mài dũa quý vị đời đời kiếp kiếp.`,
    },
    {
      question: `Con thọ pháp từ cuối năm 2016, đến nay gần 10 năm mới có cơ hội gặp Guruchi. Vài năm gần đây con đã thấu ngộ ra rằng tất cả mọi thứ đều do mình, do chúng sanh — vậy ý nghĩa của sự tu hành với Minh sư tại thế là như thế nào?`,
      answer: `Minh sư khai thị: Giống như đặt cho mình một hạt giống Bồ Đề — thì bây giờ mình phải nuôi dưỡng, mình phải chăm sóc cái hạt giống này để cho đơm hoa kết quả. Nếu mình không chăm sóc thì hạt giống Bồ Đề này sẽ mòn mỏi, sẽ hoại đi mà thôi.

Do mình hết, chứ không phải do Minh sư đâu.`,
    },
    {
      question: `Khi thiền định pháp môn Dòng Âm Lưu Thượng Đế, chúng con có cần giữ nghiêm ngặt đúng 2.5 tiếng mỗi ngày không? Và chúng con có thể thiền ở bất cứ đâu trên thế gian này không?`,
      answer: `Minh sư khai thị: Từ con cũng giống như tất cả thiền sinh khắp nơi trên thế giới — khi quý vị đã có đức tin mãnh liệt rồi, thì lực lượng dùng âm lưu Thượng đế, lực lượng gọi là Tâm Ấn này, lực lượng Trí Huệ của các con đều xuất hiện — sẽ đẩy lùi tất cả mọi sự chướng ngại trong cuộc sống.

Từ từ con cứ thả lỏng mình đi.`,
    },
  ];

  const cotLoiBinhAnLines = [
    "Ruma Tịnh tỏa ngày tim ngân nga",
    "cho đời âm Lưu Thượng Đế",
    "cho vô minh đọa lạc rời xa nhân thế",
    "nguyện sao cho thiền sinh tinh tấn công phu",
    "",
    "Thiền sinh hãy Nhất Tâm Thiện Nhất Tâm Niệm",
    "để lòng không lay chuyển",
    "một lòng Quan Âm thiền tình",
    "",
    "Muốn phá tan nghiệp sâu gì",
    "hãy ghi nhớ lời Minh sư dạy bảo các con mỗi ngày",
    "",
    "càng tham thiền nhập định",
    "con sẽ ngộ trong thiền — sắc sắc không không",
    "thấm nghĩa Kiếp vô thường",
    "",
    "tham thiền nhập định giữa nhân gian",
    "con sẽ đến bến bờ Giải Thoát",
    "đi sâu thiền định âm Lưu Thượng đế",
    "sẽ phá tan U Minh tăm tối",
    "",
    "ngồi thiền trong tâm thanh tịnh",
    "nhập sâu cốt lõi bình an",
    "Quan Âm nhẹ nhàng con sẽ cảm nhận",
    "âm Lưu Thượng đế cứ đến hoài",
    "",
    "Đời người sống được là bao",
    "hãy tham thiền nhập định",
    "cuộc sống trong thiền định",
    "mới là sự trường sinh bất lão",
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
        background:
          "linear-gradient(180deg, #070712 0%, #0c0c20 50%, #070712 100%)",
      }}
    >
      {/* ── Background Orbs ── */}
      <div
        className="absolute top-1/4 -left-48 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[700px] h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ════════════════════════════════════════
            SECTION I — HERO
        ════════════════════════════════════════ */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-violet-400/55 tracking-[0.32em] uppercase mb-5"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
          >
            Pháp Môn Của Linh Hồn
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              fontWeight: 300,
              letterSpacing: "-0.015em",
            }}
          >
            Pháp Thiền Cổ Đại
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c084fc 0%, #a855f7 45%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 450,
              }}
            >
              Thanh Âm Của Tạo Hóa · Ánh Sáng Của Linh Hồn
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white/48 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.97rem" }}
          >
            Con đường tâm linh cổ đại nhất — trực tiếp đưa linh hồn tiếp xúc
            với Ánh sáng Trí Huệ tối thượng và Âm thanh Chấn động lực của Càn
            khôn, vượt lên trên mọi hình thức tôn giáo hay giáo điều nhân gian.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3 mt-10 opacity-25"
          >
            <div className="h-px w-14 bg-violet-400" />
            <div className="w-1 h-1 rounded-full bg-violet-400" />
            <div className="h-px w-14 bg-violet-400" />
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════
            SECTION II — 4 PILLAR CARDS
        ════════════════════════════════════════ */}
        <div className="mb-20">
          <Overline>Chiều Sâu Nhận Thức</Overline>
          <SectionHeading>Bốn Tầng Hiểu Biết Về Pháp Môn Diệu Âm</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <PillarCard key={i} {...p} delay={i} />
            ))}
          </div>
        </div>

        {/* Quote Block — Khai thị Minh sư #1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 relative rounded-3xl overflow-hidden px-10 py-10"
          style={{
            background: "rgba(109,40,217,0.07)",
            border: "1px solid rgba(139,92,246,0.14)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            className="absolute left-0 top-0 w-[3px] h-full rounded-l-3xl"
            style={{
              background:
                "linear-gradient(180deg, #c084fc 0%, #7c3aed 100%)",
            }}
          />
          <p
            className="text-white/72 leading-loose italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 2.2vw, 1.12rem)",
            }}
          >
            "Minh sư là trí huệ bên trong của mình đó, ta là trí huệ bên trong
            của quý vị, là một ánh sáng soi đường dẫn lối cho quý vị đi về thế
            giới giải thoát bình an và phúc lạc này đây."
          </p>
          <p
            className="mt-5 text-violet-400/45 text-xs tracking-[0.22em] uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            — Minh Sư Ruma · Khai Thị —
          </p>
        </motion.div>

        <SectionDivider />

        {/* ════════════════════════════════════════
            SECTION III — 4 BƯỚC THỰC HÀNH
        ════════════════════════════════════════ */}
        <div className="mb-20">
          <Overline>Con Đường Thực Hành</Overline>
          <SectionHeading>Bốn Nền Tảng Của Hành Giả</SectionHeading>

          <div className="space-y-10">
            {steps.map((s, i) => (
              <StepItem key={i} {...s} delay={i} />
            ))}
          </div>
        </div>

        {/* Pháp Thoại Block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <p
            className="text-violet-400/45 tracking-[0.25em] uppercase mb-5"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
          >
            Pháp Thoại · Gốc Rễ Của Sự Nhận Thức
          </p>
          <p
            className="text-white/55 leading-loose"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}
          >
            "Pháp Môn thiền định âm thanh và ánh sáng nội tại — một Pháp môn
            cổ đại mà Đức Phật Thích Ca Mâu Ni đã tìm ra nơi dãy Hy Mã Lạp
            Sơn, từ triều đại của Ngài đến nay được xem như đã hơn 2600 năm.
            Pháp môn âm thanh ánh sáng nội tại hay dòng âm lưu Thượng đế là
            một pháp môn giúp chúng ta trực tiếp thấu ngộ bên trong mình thông
            qua lực lượng dòng âm Lưu Thượng đế — còn gọi là sự hiểu biết bằng
            Trí Huệ hay sự chứng ngộ. Pháp Môn này là một lực lượng âm lưu giúp
            tẩy rửa nghiệp chướng, dẫn dắt chúng ta đi về thế giới giải thoát."
          </p>
        </motion.div>

        <SectionDivider />

        {/* ════════════════════════════════════════
            SECTION IV — Q&A KHAI THỊ
        ════════════════════════════════════════ */}
        <div className="mb-20">
          <Overline>Vấn Đáp Khai Thị</Overline>
          <SectionHeading>Lời Minh Sư Ruma Giải Đáp</SectionHeading>

          <div className="space-y-3">
            {qaItems.map((item, i) => (
              <QAItem key={i} {...item} delay={i} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ════════════════════════════════════════
            SECTION V — BÀI KỆ CỐT LÕI BÌNH AN
        ════════════════════════════════════════ */}
        <div className="mb-20">
          <Overline>Thi Kệ</Overline>
          <SectionHeading>Cốt Lõi Bình An</SectionHeading>
          <BaiKe title="Bài Kệ · Minh Sư Ruma" lines={cotLoiBinhAnLines} />
        </div>

        {/* ════════════════════════════════════════
            CLOSING QUOTE
        ════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center py-8"
        >
          <div className="max-w-lg mx-auto">
            <p
              className="text-white/32 italic leading-loose"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.92rem, 2vw, 1.02rem)",
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
              className="mt-6 text-violet-400/35 text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              — Tinh Hoa Trí Huệ · Guruji Ruma —
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
