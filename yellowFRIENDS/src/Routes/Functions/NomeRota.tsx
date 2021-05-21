import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
export default function NomeDaRota(route: any) {
    return getFocusedRouteNameFromRoute(route)
}