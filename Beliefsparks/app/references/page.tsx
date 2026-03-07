import Link from "next/link";
import { BookOpen, ExternalLink, ArrowLeft } from "lucide-react";

interface ReferenceItem {
  title: string;
  description: string;
  author?: string;
  note?: string;
  url: string;
}

interface ReferenceSection {
  category: string;
  items: ReferenceItem[];
}

export default function References() {
  const references: ReferenceSection[] = [
    {
      category: "Primary Sources",
      items: [
        {
          title: "The Holy Bible (NRSV-CE)",
          description: "New Revised Standard Version Catholic Edition",
          note: "Primary scripture reference for all content",
          url: "https://www.biblegateway.com/versions/New-Revised-Standard-Version-Catholic-Edition-NRSVCE-Bible/",
        },
        {
          title: "Catechism of the Catholic Church",
          description: "Official compendium of Catholic doctrine",
          note: "Referenced in Catholicism sections",
          url: "https://www.usccb.org/sites/default/files/flipbooks/catechism/",
        },
        {
          title: "Vatican II Documents",
          description: "Conciliar and post-conciliar documents from the Holy See",
          note: "Complete collection of council documents",
          url: "https://www.ewtn.com/catholicism/vatican-ii",
        },
        {
          title: "Code of Canon Law",
          description: "The official body of laws for the Latin Church",
          url: "https://www.intratext.com/IXT/ENG0017/",
        },
      ],
    },
    {
      category: "Church Fathers",
      items: [
        {
          title: "Summa Theologica",
          author: "St. Thomas Aquinas",
          description: "Classical systematic theology covering God, creation, and salvation",
          url: "https://www.newadvent.org/summa/",
        },
        {
          title: "City of God",
          author: "St. Augustine",
          description: "Philosophical and theological treatise on the two cities",
          url: "https://www.newadvent.org/fathers/1201.htm",
        },
        {
          title: "Confessions",
          author: "St. Augustine",
          description: "Autobiographical work of Augustine's conversion and spiritual journey",
          url: "https://www.newadvent.org/fathers/1101.htm",
        },
        {
          title: "On the Trinity",
          author: "St. Augustine",
          description: "Theological treatise on the nature of the Trinity",
          url: "https://www.newadvent.org/fathers/1301.htm",
        },
        {
          title: "Homilies on the Gospel of John",
          author: "St. John Chrysostom",
          description: "Exegetical homilies on the Fourth Gospel",
          url: "https://www.newadvent.org/fathers/2401.htm",
        },
        {
          title: "Homilies on Matthew",
          author: "St. John Chrysostom",
          description: "Commentary and homilies on the Gospel of Matthew",
          url: "https://www.newadvent.org/fathers/2001.htm",
        },
        {
          title: "Commentary on Matthew",
          author: "St. Jerome",
          description: "Biblical commentary on the first Gospel",
          url: "https://www.newadvent.org/fathers/3007.htm",
        },
        {
          title: "Against Heresies",
          author: "St. Irenaeus",
          description: "Defense of orthodox Christianity against Gnosticism",
          url: "https://www.newadvent.org/fathers/0103.htm",
        },
        {
          title: "Commentary on John",
          author: "Origen",
          description: "Early Christian biblical exegesis",
          url: "https://www.newadvent.org/fathers/1015.htm",
        },
        {
          title: "Catechetical Lectures",
          author: "St. Cyril of Jerusalem",
          description: "Instructions for catechumens in the early Church",
          url: "https://www.newadvent.org/fathers/3101.htm",
        },
      ],
    },
    {
      category: "Vatican II Constitutions & Documents",
      items: [
        {
          title: "Dei Verbum",
          description: "Dogmatic Constitution on Divine Revelation",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html",
        },
        {
          title: "Lumen Gentium",
          description: "Dogmatic Constitution on the Church",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html",
        },
        {
          title: "Sacrosanctum Concilium",
          description: "Constitution on the Sacred Liturgy",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html",
        },
        {
          title: "Gaudium et Spes",
          description: "Pastoral Constitution on the Church in the Modern World",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_en.html",
        },
        {
          title: "Nostra Aetate",
          description: "Declaration on the Relation of the Church to Non-Christian Religions",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html",
        },
        {
          title: "Unitatis Redintegratio",
          description: "Decree on Ecumenism",
          url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_en.html",
        },
      ],
    },
    {
      category: "Scholarly Resources",
      items: [
        {
          title: "New Advent Catholic Encyclopedia",
          description: "Comprehensive online Catholic encyclopedia",
          url: "https://www.newadvent.org/cathen/",
        },
        {
          title: "Catholic Biblical Association",
          description: "Peer-reviewed biblical scholarship",
          url: "https://catholicbiblical.org/",
        },
        {
          title: "Pontifical Biblical Commission",
          description: "Authoritative interpretations and guidance on Scripture",
          url: "https://www.vatican.va/roman_curia/congregations/cfaith/pcb_documents/pcb_index.htm",
        },
        {
          title: "Journal of Theological Studies",
          description: "Academic theological research from Oxford",
          url: "https://academic.oup.com/jts",
        },
        {
          title: "Catholic University of America Press",
          description: "Scholarly Catholic publications",
          url: "https://cuapress.cua.edu/",
        },
        {
          title: "Eerdmans Publishing",
          description: "Academic religious and biblical studies",
          url: "https://www.eerdmans.com/",
        },
      ],
    },
    {
      category: "Online Resources",
      items: [
        {
          title: "Vatican.va",
          description: "Official website of the Holy See",
          url: "https://www.vatican.va",
        },
        {
          title: "USCCB",
          description: "United States Conference of Catholic Bishops",
          url: "https://www.usccb.org",
        },
        {
          title: "Bible Gateway",
          description: "Online Bible search and multiple translations",
          url: "https://www.biblegateway.com",
        },
        {
          title: "BibleHub",
          description: "Bible study tools, commentaries, and original languages",
          url: "https://biblehub.com/",
        },
        {
          title: "Blue Letter Bible",
          description: "In-depth Bible study resources with Hebrew and Greek",
          url: "https://www.blueletterbible.org/",
        },
        {
          title: "Catholic Online",
          description: "Catholic news, saints, prayers, and resources",
          url: "https://www.catholic.org/",
        },
        {
          title: "EWTN",
          description: "Eternal Word Television Network - Catholic media",
          url: "https://www.ewtn.com/",
        },
        {
          title: "BibleProject",
          description: "Animated videos and resources for understanding Scripture",
          url: "https://bibleproject.com/",
        },
        {
          title: "Biblical Archaeology Society",
          description: "Archaeological insights into the biblical world",
          url: "https://www.baslibrary.org/",
        },
      ],
    },
    {
      category: "Patristics & Early Church",
      items: [
        {
          title: "New Advent Fathers of the Church",
          description: "Complete collection of early Church Fathers writings",
          url: "https://www.newadvent.org/fathers/",
        },
        {
          title: "Christian Classics Ethereal Library",
          description: "Classic Christian books in electronic format",
          url: "https://ccel.org/",
        },
        {
          title: "Early Christian Writings",
          description: "Texts from the Apostolic Fathers and apocrypha",
          url: "https://www.earlychristianwritings.com/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-stone-500 hover:text-vatican-red transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-stone-200/50 rounded-full mb-6">
            <BookOpen className="h-6 w-6 text-vatican-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            References & Sources
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            The primary sources, theological works, and scholarly resources that inform our content.
          </p>
        </div>

        {/* References List */}
        <div className="space-y-10">
          {references.map((section) => (
            <div key={section.category} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b border-stone-100 pb-3">
                {section.category}
              </h2>
              <ul className="space-y-6">
                {section.items.map((item, index) => (
                  <li key={index} className="border-b border-stone-50 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-stone-800 mb-1">
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-vatican-red transition-colors inline-flex items-center"
                          >
                            {item.title}
                            <ExternalLink className="h-4 w-4 ml-2 text-stone-400 group-hover:text-vatican-red" />
                          </a>
                        </h3>
                        {item.author && (
                          <p className="text-sm text-stone-500 italic mb-1">{item.author}</p>
                        )}
                        <p className="text-stone-600 text-sm">{item.description}</p>
                        {item.note && (
                          <p className="text-xs text-stone-400 mt-1">{item.note}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-vatican-gold/10 rounded-xl border border-vatican-gold/20">
          <p className="text-sm text-stone-600 text-center">
            <strong className="text-stone-800">Note:</strong> This page is continuously updated as new content is added. 
            All external links open in a new window. For specific source inquiries about any article, please contact us.
          </p>
        </div>

      </div>
    </div>
  );
}
