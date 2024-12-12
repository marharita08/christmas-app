import { SectionHeader } from "@/components/section-header/section-header";
import { SectionContainer } from "@/components/section-container/section-container";
import { YoutubeFrame } from "@/components/youtube-frame/youtube-frame";

const Music: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader
        title="Music"
        text="Take a moment to listen to some chosen carols."
      />
      <YoutubeFrame id="EKkzbbLYPuI" />
      <YoutubeFrame id="izx1P9jvLw0" />
      <YoutubeFrame id="7bx4S2YGS48" />
    </SectionContainer>
  );
};

export { Music };
