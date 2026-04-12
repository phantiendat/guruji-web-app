import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.12, ease: "easeOut" },
  }),
};

/* ─── Sub-components ─── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-10 opacity-30">
      <div className="h-px w-16 bg-amber-300" />
      <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
      <div className="h-px w-16 bg-amber-300" />
    </div>
  );
}

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
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7
                 hover:border-amber-300/30 hover:bg-white/10 transition-all duration-700"
    >
      <div className="text-3xl mb-4 select-none">{icon}</div>
      <h3
        className="text-amber-200 mb-3 font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
      >
        {title}
      </h3>
      <p
        className="text-white/70 leading-relaxed"
        style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem" }}
      >
        {content}
      </p>
    </motion.div>
  );
}

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
        className="flex-shrink-0 w-10 h-10 rounded-full border border-amber-300/40
                    flex items-center justify-center text-amber-300 font-bold text-sm"
      >
        {number}
      </div>
      <div>
        <h4
          className="text-amber-100 font-semibold mb-1"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
        >
          {title}
        </h4>
        <p
          className="text-white/65 leading-relaxed"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function TabbedSection({ tabs }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-6"
    >
      {tabs.map((tab, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{tab.icon}</span>
            <h4
              className="text-amber-200 font-semibold"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
            >
              {tab.title}
            </h4>
          </div>
          <p
            className="text-white/70 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
          >
            {tab.body}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function WarningItem({ text, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.li
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex items-start gap-3"
    >
      <span className="mt-1 text-rose-400 flex-shrink-0">✦</span>
      <span
        className="text-white/70 leading-relaxed"
        style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
      >
        {text}
      </span>
    </motion.li>
  );
}

/* ─── Main Component ─── */
export default function ThienCoDaiSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  /* ── DATA ── */
  const pillars = [
    {
      icon: "🌅",
      title: "Nguồn Gốc Vô Thủy",
      content:
        "Pháp thiền cổ đại đã tồn tại từ thời vô thủy, truyền nối qua các thời kỳ của chư Phật và hiện diện từ trước khi Đức Phật Thích Ca Mâu Ni giáng thế. Đây không phải tôn giáo nhân gian, mà là pháp môn của linh hồn — con đường trí huệ đưa con người thoát khỏi bể khổ trầm luân.",
    },
    {
      icon: "🔮",
      title: "Cơ Chế Hướng Nội",
      content:
        "Cơ chế cốt lõi là sự hướng nội — xoay góc nhìn từ thế giới huyễn mộng bên ngoài vào sâu thẳm bên trong tâm. Pháp môn dùng chân lý vô ngôn, không phụ thuộc vào ngôn ngữ phàm phu, để đánh thức vị Phật tánh đang ngủ mê bên trong mỗi chúng sanh.",
    },
    {
      icon: "⚡",
      title: "Lực Lượng Dòng Âm Lưu",
      content:
        "Dòng âm lưu Thượng Đế là tiếng gọi của Thượng Đế — một chấn động lực của càn khôn vũ trụ, là ánh sáng và âm thanh nội tại của linh hồn. Lực lượng này không mắt, không mũi, nhưng nghe và thấy vô cùng rõ ràng, bao trùm muôn loài bằng tình yêu, từ bi và lòng bác ái vĩ đại.",
    },
    {
      icon: "🛡️",
      title: "Sự Hợp Nhất Tuyệt Đỉnh",
      content:
        "Pháp thiền cổ đại và lực lượng dòng âm lưu Thượng Đế hòa quyện thành một Bát nhã thuyền đưa linh hồn vượt thoát sinh tử. Hóa thân của Minh sư đồng hành 24/7 như tấm khiên bảo vệ, biến chuyện lớn thành chuyện nhỏ, chuyện nhỏ thành không có gì.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Thọ Tâm Ấn",
      desc: "Hành giả phải được một bậc Minh sư chân chính truyền pháp để khai mở Thiên nhãn (mắt trí huệ) và kết nối với lực lượng vũ trụ. Đây là bước khởi đầu bắt buộc — chúng sanh không thể tự tỉnh giấc mà không có ngọn đèn dẫn lối.",
    },
    {
      number: "2",
      title: "Giữ Giới & Thuần Chay",
      desc: "Người tu tuyệt đối ăn thuần chay để không tàn sát sinh linh, trưởng dưỡng lòng từ bi. Giữ nghiêm ngũ giới: không sát sanh, không trộm cắp, không tà dâm, không nói dối, không uống rượu. Đây là nền tảng thanh tịnh của thân mạng.",
    },
    {
      number: "3",
      title: "Tọa Thiền Mỗi Ngày",
      desc: "Dành ít nhất 2,5 đến 3 tiếng mỗi ngày để tĩnh tọa, gác lại mọi lo toan của hồng trần. Tập trung vào mắt trí huệ (giữa trán) để chiêm ngưỡng ánh sáng nội tại và lắng nghe âm thanh thiêng liêng đang reo ngân từ bên trong.",
    },
    {
      number: "4",
      title: "Niệm Năm Hồng Danh",
      desc: "Luôn niệm thầm 5 hồng danh từ bên trong tâm, mọi lúc mọi nơi — dù đang thiền hay đang làm việc giữa chợ đời. Đây là bảo pháp bảo vệ bản thân khỏi lực lượng phủ định và ma vương.",
    },
  ];

  const amluTabs = [
    {
      icon: "🌊",
      title: "Bản Chất Của Dòng Âm Lưu",
      body: "Như dòng suối cam lồ từ đại dương tình thương bao la, dòng âm lưu Thượng Đế tuôn trào để gột rửa mọi ô trược của trần gian. Lực lượng này hoạt động như nguồn năng lượng thanh lọc, từ từ đốt cháy và tẩy rửa những nghiệp chướng sâu dày qua nhiều đời nhiều kiếp.",
    },
    {
      icon: "🔗",
      title: "Con Đường Kết Nối",
      body: "Hành giả không thể tìm kiếm dòng âm lưu ở bên ngoài — chỉ có thể nhận được thông qua lực lượng gia trì của Minh sư trong buổi Truyền Tâm Ấn. Trong lúc tọa thiền, buông xả thân tâm hoàn toàn, lắng nghe dòng âm thanh vi diệu đang reo ngân từ cõi ánh sáng nội tại.",
    },
    {
      icon: "🌺",
      title: "Lợi Ích Tâm Linh",
      body: "Thiền định tinh tấn mang lại bình an nội tại, xua tan phiền não, dập tắt ngọn lửa tham sân si. Công đức tu hành không chỉ giải thoát bản thân mà còn giúp năm đời, thậm chí chín đời tổ tiên được siêu thăng. Đó là con đường phụng sự rộng nhất trong một kiếp người.",
    },
  ];

  const warnings = [
    "Ngã chấp, ngã mạn và đố kỵ — Tự cao, kiêu ngạo cho rằng mình tu giỏi, hay sinh lòng đố kỵ. Lòng ngã mạn sẽ thu hút Asura xâm chiếm, thiêu rụi toàn bộ công đức.",
    "Phỉ báng Minh sư — Không có tội lỗi nào nặng nề hơn việc phản bội hay buông lời phỉ báng bậc giác ngộ. Hành động này lập tức đưa linh hồn rơi vào địa ngục A Tỳ.",
    "Lợi dụng tâm linh để cầu thần thông, danh lợi — Đến với Minh sư chỉ để cầu vật chất hay thần thông phép lạ là sự mù quáng. Tu hành là để giải thoát, không phải thỏa mãn cái đầu óc phàm phu.",
    "Từ bỏ thuần chay và giải đãi thiền định — Buông thả theo cám dỗ của hồng trần khiến linh hồn mất đi sự bảo vệ, tiếp tục rơi vào guồng quay sinh tử đau thương.",
  ];

  return (
    <section
      id="phap-thien-co-dai"
      className="relative min-h-screen py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0f0f23 40%, #0a0a1a 100%)" }}
    >
      {/* Background Orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-8 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* ── HERO HEADER ── */}
        <motion.div
          ref={heroRef}
          variants={fadeUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-5"
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
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Pháp Thiền Cổ Đại
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
              }}
            >
              Lực Lượng Dòng Âm Lưu Thượng Đế
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white/55 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
          >
            Một con đường tu học từ thời vô thủy — nơi linh hồn trở về ánh sáng và âm thanh
            của chính mình, vượt thoát mọi khổ đau của sinh tử luân hồi.
          </motion.p>
        </motion.div>

        {/* ── PILLARS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {pillars.map((p, i) => (
            <PillarCard key={i} {...p} delay={i} />
          ))}
        </div>

        <SectionDivider />

        {/* ── STEPS ── */}
        <div className="mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/90 mb-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 300,
            }}
          >
            Bốn Bước Thực Hành Cụ Thể
          </motion.h2>

          <div className="space-y-8">
            {steps.map((s, i) => (
              <StepItem key={i} {...s} delay={i} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── AM LUU SECTION ── */}
        <div className="mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/90 mb-3"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 300,
            }}
          >
            Dòng Âm Lưu Thượng Đế
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white/45 mb-10"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
          >
            Chấn động lực của càn khôn vũ trụ ngự trị trong từng hơi thở
          </motion.p>
          <TabbedSection tabs={amluTabs} />
        </div>

        <SectionDivider />

        {/* ── RESULT CARD ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(245,158,11,0.10) 100%)",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <div className="p-10 text-center">
            <div className="text-5xl mb-5">🕊️</div>
            <h3
              className="text-amber-200 mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                fontWeight: 400,
              }}
            >
              Kết Quả Tối Thượng: Giải Thoát Một Đời
            </h3>
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
            >
              Khi hành giả thực hành pháp môn đến nơi đến chốn, khi trang cuối cuộc đời khép
              lại — họ sẽ không phải đối mặt với thần chết. Lực lượng dòng âm lưu Thượng Đế
              và hóa thân của Minh sư sẽ trực tiếp dìu dắt, đón rước linh hồn bay thẳng về thế
              giới vĩnh hằng cứu rỗi. Không còn luân hồi. Không còn sinh tử đau thương.
            </p>
          </div>
        </motion.div>

        {/* ── WARNINGS ── */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center text-white/90 mb-3"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 300,
            }}
          >
            Những Điều Tối Kỵ
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white/45 mb-8"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
          >
            Để bảo vệ huệ mạng và công đức tu hành, hành giả tuyệt đối không được phạm phải
          </motion.p>

          <div
            className="rounded-2xl border border-rose-400/15 bg-rose-900/5 backdrop-blur-md p-8"
          >
            <ul className="space-y-5">
              {warnings.map((w, i) => (
                <WarningItem key={i} text={w} delay={i} />
              ))}
            </ul>
          </div>
        </div>

        {/* ── CLOSING VERSE ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <p
              className="text-white/40 italic leading-loose"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}
            >
              "Kiếp người cần có Trí Huệ
              <br />
              Khai sáng tâm từ mở cửa minh
              <br />
              Giữ lấy tu hành tại thế ai ơi..."
            </p>
            <p
              className="mt-4 text-amber-400/50 text-sm tracking-widest"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              — Thi kệ của Minh sư Guruji Ruma —
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
