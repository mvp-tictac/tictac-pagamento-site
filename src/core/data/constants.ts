import {
  Wallet,
  Landmark,
  ArrowRightLeft,
  ChartNoAxesColumn,
  Trophy,
  ChartNoAxesCombined,
  CreditCard,
} from "lucide-react";

export const menu = [
  {
    title: "ForYou",
    url: "/personal",
    submenu: [
      {
        submenuKey: "PersonalAccount",
        href: "/personal",
        icon: Wallet,
      },
      {
        submenuKey: "PersonalTransaction",
        href: "/personal/transactions",
        icon: ArrowRightLeft,
      },
      {
        submenuKey: "PersonalFinancialManagement",
        href: "/personal/finance-controls",
        icon: ChartNoAxesColumn,
      },
      {
        submenuKey: "PersonalRewards",
        href: "/personal/rewards",
        icon: Trophy,
      },
    ],
  },
  {
    title: "Business",
    url: "/business",
    submenu: [
      {
        submenuKey: "BusinessAccount",
        href: "/business",
        icon: Landmark,
      },
      {
        submenuKey: "BusinessFinancialManagement",
        href: "/business/finance-management",
        icon: ChartNoAxesCombined,
      },
      {
        submenuKey: "BusinessPaymentSolution",
        href: "/business/payment-solutions",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];
