// Shared margin rule used by both client and server.
// A margin breach only exists when costs have been identified (cost > 0) and
// the markup percentage is below the configured minimum threshold.
// Blanket orders are explicitly exempt from margin breach / SOP breach rules.
export const isMarginBreach = (cost, markupPct, minMargin, isBlanket = false) => {
    if (isBlanket) return false;
    return cost > 0 && markupPct < minMargin;
};
